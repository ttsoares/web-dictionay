import nProgress from "nprogress";

nProgress.configure({
  showSpinner: false,
});

/**
 * Fetches the given URL and updates the state accordingly.
 *
 * @param {string | Request} url The URL to fetch.
 * @param {(data: T) => void} dataSetter A function to call with the received data.
 * @param {(error: boolean) => void} loadingSetter A function to call when the request is in progress.
 * @param {(error: boolean) => void} errorSetter A function to call when the request fails.
 *
 * @template T The type of the data to receive.
 */
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
