import { ArrowUpRight } from 'lucide-react';

const ArticleCard = ({ title, source, excerpt, date, link, thumbnail }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/9] bg-gray-50 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-lg bg-gray-100 flex items-center justify-center">
                <div className="w-5 h-3 rounded-sm bg-gray-200"></div>
              </div>
              <p className="text-xs text-gray-300">Article Thumbnail</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            {source}
          </span>
          <span className="text-xs text-gray-300">{date}</span>
        </div>

        <h3 className="text-lg font-semibold text-black tracking-tight leading-snug group-hover:text-gray-700 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center gap-1 text-sm font-medium text-black pt-2">
          Read more
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
