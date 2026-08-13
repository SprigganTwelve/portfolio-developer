import ArticleCard from "../../components/ArticleCard";
import { articles } from "../../data/data";

const TechnologyWatchSection = () => {
     return (
          <section id="techwatch" className="sq-pattern py-15">
               <div className="max-w-5xl mx-auto px-4">
                    <div className="mb-9">
                         <div>
                              <p className="font-mono text-sm font-semibold text-muted mb-2"> {">"}- Blog</p>
                              <h2 className="font-display text-4xl">
                                   <span className="font-medium tracking-tight">Veille </span>
                                   <span className="text-primary-gradient font-extrabold tracking-tight">
                                        Technologique
                                   </span>
                              </h2>
                         </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {articles.map((article) => (
                              <ArticleCard key={article.id} article={article} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default TechnologyWatchSection;
