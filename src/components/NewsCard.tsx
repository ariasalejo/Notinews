import React from 'react';

type NewsCardProps = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, description, url, urlToImage, publishedAt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src={urlToImage} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{title}</div>
        <p className="text-gray-700 dark:text-gray-400 text-base">
          {description.length > 150 ? description.substring(0, 150) + '...' : description}
        </p>
      </div>
      <div className="px-6 py-4">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
      <div className="px-6 py-2 text-sm text-gray-600 dark:text-gray-400">
        <p>Published on: {new Date(publishedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;
