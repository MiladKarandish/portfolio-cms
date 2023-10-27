const fetcher = async (url: string, options: any = {}) => {
  const baseUrl = "http://localhost:1337";
  const opt = { ...options };
  if (!opt.headers) opt.headers = {};

  opt.headers.Authorization =
    "Bearer 9d7784ea786aaba14ad2aee9441ac8bf129e6138a58653c70b09d79ead3ecdb248801e37671d088dd91bbbf8a905f4a4bf6e826885d7088fdfa8134743d6cbedf8e709967e3ae56c11573da908c3b0c629483a321c7090e788a97e7c73ed48585d8ef177f11f50d8c6bae72fce8798de9e0ae286cfef76bc636dc2f72b28687e";

  return await fetch(`${baseUrl}/${url}`, opt);
};

export default fetcher;
