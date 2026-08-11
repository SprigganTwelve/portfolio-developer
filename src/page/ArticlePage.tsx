import ReactMarkdown from "react-markdown";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import Tag from "../components/ui/tag";
import { articles } from "../data/data";

interface ArticlePageProps {
     articleId: string;
     onBack: () => void;
     onViewArticle: (id: string) => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ articleId, onBack, onViewArticle }) => {
     const article = articles.find((a) => a.id === articleId);

     if (!article) {
          return (
               <main className="sq-pattern min-h-screen flex items-center justify-center pt-20">
                    <Card className="p-12 text-center max-w-120">
                         <div className="font-display text-6xl mb-4 text-primary-gradient">404</div>
                         <h1 className="font-display text-2xl mb-4">Article introuvable</h1>
                         <Button onClick={onBack} variant="black">
                              ← Retour au blog
                         </Button>
                    </Card>
               </main>
          );
     }

     const dateFormatted = new Date(article.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
     });

     return (
          <main className="min-h-screen pt-20">
               {/* Hero */}
               <section className="relative h-90 border-b-2">
                    <img
                         src={article.imageUrl}
                         alt={`Illustration pour l'article : ${article.title}`}
                         className="w-full h-full object-cover"
                    />
                    <div
                         style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                   "linear-gradient(to top, rgba(10,10,10,0.85), rgba(10,10,10,0.2) 60%, transparent)",
                         }}
                         aria-hidden="true"
                    />
                    <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
                         <div className="flex flex-wrap gap-2 mb-3">
                              {article.categories.map((c) => (
                                   <Tag key={c} variant="pink" className="text-xs">
                                        {c}
                                   </Tag>
                              ))}
                         </div>
                         <h1 className="font-display font-black text-3xl md:text-4xl text-white leading-tight">
                              {article.title}
                         </h1>
                         <div className="flex items-center gap-4 mt-3 font-mono text-sm text-gray-300">
                              <span>{dateFormatted}</span>
                              <span aria-hidden="true">·</span>
                              <span>⏱ {article.readingTime} min de lecture</span>
                         </div>
                    </div>
               </section>
               <article>
                    <ReactMarkdown>{article.content}</ReactMarkdown>
               </article>
          </main>
     );
};

export default ArticlePage;
