import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArticleCard from "../components/ArticleCard";
import MarkdownRenderer from "../components/renderer/MarkdownRenderer";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import Tag from "../components/ui/tag";
import { articles } from "../data/data";
import { scrollToSection } from "../lib/scrollUtils";

const ArticlePage = () => {
     const navigate = useNavigate();
     let params = useParams();
     const article = articles.find((a) => a.id === params.articleId);
     const others = articles.filter((a) => a.id !== params.articleId).slice(0, 2);

     const articleRef = useRef<HTMLElement | null>(null);
     const [scrolledPastMiddle, setScrolledPastMiddle] = useState(false);

     if (!article) {
          return (
               <main className="sq-pattern min-h-screen flex items-center justify-center pt-20">
                    <Card className="p-12 text-center max-w-120">
                         <div className="font-display text-6xl mb-4 text-primary-gradient">404</div>
                         <h1 className="font-display text-2xl mb-4">Article introuvable</h1>
                         <Button onClick={() => navigate("/#techwatch")} variant="black">
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

     const backToBlog = () => {
          navigate("/#techwatch");
          setTimeout(() => scrollToSection("techwatch"), 60);
     };

     useEffect(() => {
          const onScroll = () => {
               const midPoint = window.scrollY + window.innerHeight / 2;
               const pageMid = document.documentElement.scrollHeight / 2;
               setScrolledPastMiddle(midPoint > pageMid);
          };

          window.addEventListener("scroll", onScroll, { passive: true });
          onScroll();
          return () => window.removeEventListener("scroll", onScroll);
     }, []);

     const handleFabClick = () => {
          if (!articleRef.current) return;
          if (!scrolledPastMiddle) {
               articleRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
          } else {
               articleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
     };

     return (
          <main className="min-h-screen pt-12">
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

               {/* Back */}
               <div className="py-3 border-b-2">
                    <div className="max-w-3xl mx-auto px-4">
                         <button
                              onClick={backToBlog}
                              className="font-body text-sm font-semibold flex items-center gap-2 cursor-pointer"
                         >
                              ← Retour à la veille
                         </button>
                    </div>
               </div>

               {/* Article body */}
               <article ref={articleRef} className="max-w-3xl mx-auto px-4 py-12">
                    {/* Summary */}
                    <Card className="mb-10 border-l-6 border-l-primary-start">
                         <p className="font-body text-lg text-muted leading-relaxed italic">{article.summary}</p>
                    </Card>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                         {article.tags.map((t) => (
                              <Tag key={t}>{t}</Tag>
                         ))}
                    </div>

                    {/* Content */}
                    <MarkdownRenderer content={article.content} />

                    {/* Author box */}
                    <Card className="mt-12 flex items-center gap-5 bg-foreground text-background">
                         <div className="bg-primary-gradient w-15 h-15 border-3 border-white" />
                         <div>
                              <div className="font-display font-black text-lg text-primary-gradient">Zouayobo DALI</div>
                              <div className="font-mono text-xs text-gray-400 mb-1">
                                   Développeur Full-Stack · Étudiant IPSSI
                              </div>
                              <p className="text-sm text-gray-400">
                                   Passionné par le développement logiciel et les nouvelles technologies.
                              </p>
                         </div>
                    </Card>
               </article>

               {/* Related articles */}
               {others.length > 0 && (
                    <section className="max-w-3xl mx-auto px-4 py-12">
                         <h2 className="font-display text-3xl mb-6">
                              <span className="font-medium tracking-tight">Autres </span>
                              <span className="text-primary-gradient font-extrabold tracking-tight">articles</span>
                         </h2>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              {others.map((article) => (
                                   <ArticleCard key={article.id} article={article} isMinimal={true} />
                              ))}
                         </div>
                    </section>
               )}
               {/* Floating Action Button */}
               <Button
                    onClick={handleFabClick}
                    className="fixed bottom-10 right-6 w-12 h-12 border-3"
                    variant="primary"
                    size="icon"
               >
                    {scrolledPastMiddle ? (
                         <ChevronUp strokeWidth={3} size={28} />
                    ) : (
                         <ChevronDown strokeWidth={3} size={28} />
                    )}
               </Button>
          </main>
     );
};

export default ArticlePage;
