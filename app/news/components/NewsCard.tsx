export function NewsCard() {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-4">{news.title}</h2>
      <p className="text-gray-600 mt-2">{news.description}</p>
      <div className="mt-4 text-gray-500">
        {new Date(news.date).toLocaleDateString()}
      </div>
    </div>
  );
}

export function NewsSkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-300 h-48 rounded-lg"></div>
          <div className="h-6 bg-gray-300 rounded mt-4 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-full"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
