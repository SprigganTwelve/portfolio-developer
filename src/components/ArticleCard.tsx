import { useNavigate } from "react-router";
import type { Article } from "../data/data";
import Button from "./ui/button";
import Card from "./ui/card";
import Tag from "./ui/tag";

const ArticleCard = ({ article, isMinimal = false }: { article: Article; isMinimal?: boolean }) => {
     const navigate = useNavigate();
     const dateFormatted = new Date(article.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
     });

     return (
          <Card className="flex flex-col p-0" hover={isMinimal} onClick={() => navigate(`/article/${article.id}`)}>
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
                    {!isMinimal && (
                         <p className="text-sm text-muted font-body flex-1 leading-relaxed">{article.summary}</p>
                    )}
                    <div className="flex items-center justify-between text-xs text-muted font-mono">
                         {!isMinimal && <span>{dateFormatted}</span>}
                         <span>⏱ {article.readingTime} min</span>
                    </div>
                    {!isMinimal && <Button onClick={() => navigate(`/article/${article.id}`)}>Lire l'article →</Button>}
               </div>
          </Card>
     );
};

export default ArticleCard;
