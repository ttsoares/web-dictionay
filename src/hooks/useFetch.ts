import nProgress from "nprogress";

nProgress.configure({
  showSpinner: false,
});

export default async function useFetch<T>(
  url: string | Request,
  dataSetter: (data: T) => void,
  loadingSetter: (error: boolean) => void,
  errorSetter: (error: boolean) => void
) {
  try {
    nProgress.start();
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    dataSetter(data);
    errorSetter(false);
  } catch (err) {
    errorSetter(true);
  } finally {
    loadingSetter(false);
    nProgress.done();
  }
}
