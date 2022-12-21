import { useEffect } from 'react';

type ErrorModalType = {
  error: string;
  setState: (it: { error: string }) => void;
};

export const useErrorModal = ({ error, setState }: ErrorModalType): void => {
  useEffect(() => {
    const errorModal = setTimeout(() => {
      setState({ error: '' });
    }, 3000);

    return () => {
      clearTimeout(errorModal);
    };
  }, [error]);
};
