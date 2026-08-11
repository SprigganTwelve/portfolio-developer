import type { Article } from "../data/data";
import Button from "./ui/button";
import Card from "./ui/card";
import Tag from "./ui/tag";

const ArticleCard = ({ article, onView }: { article: Article; onView: () => void }) => {
     const dateFormatted = new Date(article.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
     });

     return (
          <Card className="flex flex-col p-0">
               <div className="overflow-hidden h-40 border-b-2">
                    <img
                         src={article.imageUrl}
                         alt={`Illustration pour l'article : ${article.title}`}
                         className="w-full h-full object-cover"
                         loading="lazy"
                    />
               </div>
               <div className="p-5 flex flex-col flex-1 gap-4">
                    <div className="flex flex-wrap gap-1.5">
                         {article.categories.map((c) => (
                              <Tag key={c} variant="pink">
                                   {c}
                              </Tag>
                         ))}
                    </div>
                    <h3 className="font-display text-base font-black leading-snug">{article.title}</h3>
                    <p className="text-sm text-muted font-body flex-1 leading-relaxed">{article.summary}</p>
                    <div className="flex items-center justify-between text-xs text-muted font-mono">
                         <span>{dateFormatted}</span>
                         <span>⏱ {article.readingTime} min</span>
                    </div>
                    <Button onClick={onView}>Lire l'article →</Button>
               </div>
          </Card>
     );
};

export default ArticleCard;
