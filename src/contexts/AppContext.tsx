import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios, { Canceler } from 'axios';
import { api, PATH } from '../services/api';
import { MessageContext } from './MessageContext';
import { ProductProps } from '../components/ProductItem';
import { CategoryProps } from '../components/CategoryItem';

const CancelToken = axios.CancelToken;
let cancel: Canceler;

type AppState = {
  loadingCategory: boolean;
  loadingProducts: boolean;
  refreshingProducts: boolean;
  products: ProductProps[];
  productsFiltered: ProductProps[];
  categories: CategoryProps[];
  getProducts: (name?: string) => void;
  filterByCategory: (id: string) => void;
  onRefresh: () => void;
  getCategories: () => void;
};

export const AppContext = createContext<AppState>({} as AppState);

const AppProvider: React.FC = ({ children }) => {
  const { showMessage } = useContext(MessageContext);

  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [refreshingProducts, setRefreshingProducts] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  const filterByCategory = useCallback(
    (id: string) => {
      const filteredProducts = products.filter(
        product => product.category_id === id,
      );
      setProductsFiltered(filteredProducts);
    },
    [products],
  );

  const getProducts = useCallback(
    async (name?: string, refresh = false) => {
      if (!refresh) {
        setLoadingProducts(true);
      }

      const url = name
        ? PATH.products.url + `?search=${name}`
        : PATH.products.url;

      if (cancel && cancel.length) {
        cancel();
      }

      await api
        .get(url, {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
        })
        .then(({ data }) => {
          // Em alguns casos a api retornava objeto invez de array.
          if (!Array.isArray(data)) {
            setProducts(Object.values(data) as ProductProps[]);
            setProductsFiltered(Object.values(data) as ProductProps[]);
          } else {
            setProducts(data as ProductProps[]);
            setProductsFiltered(data as ProductProps[]);
          }
        })
        .catch(err => {
          if (err.message) {
            showMessage({ text: err.message, type: 'danger' });
          }
        })
        .finally(() => {
          setLoadingProducts(false);
          setRefreshingProducts(false);
        });
    },
    [showMessage],
  );

  const onRefresh = useCallback(() => {
    if (refreshingProducts) {
      return;
    }

    setRefreshingProducts(true);
    getProducts('', true);
  }, [refreshingProducts, getProducts]);

  const getCategories = useCallback(async () => {
    setLoadingCategory(true);

    await api
      .get(PATH.categories.url)
      .then(({ data }) => {
        setCategories(data as CategoryProps[]);
      })
      .finally(() => setLoadingCategory(false));
  }, []);

  useEffect(() => {
    getProducts();
    getCategories();
  }, [getProducts, getCategories]);

  return (
    <AppContext.Provider
      value={{
        loadingCategory,
        loadingProducts,
        refreshingProducts,
        getProducts,
        filterByCategory,
        onRefresh,
        products,
        productsFiltered,
        getCategories,
        categories,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
