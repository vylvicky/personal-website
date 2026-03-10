import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";
import previewRunescape from "@/assets/preview-runescape.png";
import previewMyopia from "@/assets/preview-myopia.png";
import previewRona from "@/assets/preview-rona.png";
import previewBoys from "@/assets/preview-boys.png";
import previewMinions from "@/assets/preview-minions.png";
import previewPutty from "@/assets/preview-putty.png";
import previewThoma from "@/assets/preview-thoma.png";
import previewDress60 from "@/assets/preview-dress60.png";
import previewHbsBreakup from "@/assets/preview-hbs-breakup.png";
import previewWorklife from "@/assets/preview-worklife.png";
import previewSports from "@/assets/preview-sports.png";
import previewLeafy from "@/assets/preview-leafy.png";
import previewMiddleschool from "@/assets/preview-middleschool.png";
import previewNaruto from "@/assets/preview-naruto.png";
import previewRedherring from "@/assets/preview-redherring.png";
import cartoonWaymo from "@/assets/cartoon-waymo.png";
import cartoonCollars from "@/assets/cartoon-collars.png";

type WritingEntry = {
  title: string;
  outlet: string;
  year: string;
  link?: string;
  featured?: boolean;
  preview?: string;
};

const writing: WritingEntry[] = [
{ title: "An HBS Discussion Group Breaks Up", outlet: "The Harbus", year: "2025", link: "https://www.harbus.org/post/an-hbs-discussion-group-breaks-up", featured: true, preview: previewHbsBreakup },
{ title: "I Have Found Work-Life Balance in the 20 Minutes Between Classes", outlet: "The Harbus", year: "2025", link: "https://www.harbus.org/post/i-have-found-work-life-balance-in-the-20-minutes-between-classes", featured: true, preview: previewWorklife },
{ title: "How to Dress for 60°F", outlet: "The Harbus", year: "2024", link: "https://www.harbus.org/post/how-to-dress-for-60-f", featured: true, preview: previewDress60 },
{ title: "The Book of Runescape", outlet: "Yale Record", year: "2023", link: "https://yalerecord.org/2023/03/30/the-book-of-runescape/", featured: true, preview: previewRunescape },
{ title: "I Have Severe Myopia and I Am Ready for the Metaverse", outlet: "Yale Record", year: "2023", link: "https://yalerecord.org/2023/01/08/i-have-severe-myopia-and-i-am-ready-for-the-metaverse/", featured: true, preview: previewMyopia },
{ title: "My Putty Is Stuck to the Wall", outlet: "Yale Daily News", year: "2021", link: "https://yaledailynews.com/blog/2021/10/07/my-putty-is-stuck-to-the-wall/", featured: true, preview: previewPutty },
{ title: "I am RONA, Canadian Home Improvement Retailer and the Name on Everyone's Lips", outlet: "Yale Record", year: "2020", link: "https://yalerecord.org/2020/05/14/i-am-rona-canadian-home-improvement-retailer-and-the-name-on-everyones-lips/", featured: true, preview: previewRona },
{ title: "Opinion: I Was Traumatized By The Minions Marketing Campaign In 2015 And History Has Forgotten Me", outlet: "Yale Record", year: "2020", link: "https://yalerecord.org/2020/01/06/opinion-i-was-traumatized-by-the-minions-marketing-campaign-in-2015-and-history-has-forgotten-me/", featured: true, preview: previewMinions },
{ title: "Thoma Bravo Buys My Reading Responses", outlet: "Yale Daily News", year: "2020", link: "https://yaledailynews.com/blog/2020/02/20/thoma-bravo-buys-my-reading-responses/", featured: true, preview: previewThoma },
{ title: "Op-Ed: I Can't Sleep, but I Will Be Able to Sleep Soon, Thanks to Naruto", outlet: "Yale Record", year: "2018", link: "https://issuu.com/yalerecord/docs/146.5_final_pages/21", featured: true, preview: previewNaruto },
{ title: "The Season's Hottest Leafy Greens", outlet: "Yale Record", year: "2017", link: "https://issuu.com/yalerecord/docs/the_wellness_issue/11", featured: true, preview: previewLeafy },
{ title: "A Middle School Health Teacher Teaches Sex-Ed Using the Song \"Every Time We Touch\"", outlet: "Yale Record", year: "2017", link: "https://issuu.com/yalerecord/docs/the_music_issue_/10", featured: true, preview: previewMiddleschool },
{ title: "Why Aren't More Boys In Love With Me? I Have Not Committed Any Crimes", outlet: "Yale Record", year: "2017", link: "https://yalerecord.org/2017/11/23/why-arent-more-boys-in-love-with-me-i-have-not-committed-any-crimes/", featured: true, preview: previewBoys },
{ title: "Red Herring Actually a Red Herring", outlet: "Yale Record", year: "2016", link: "https://issuu.com/yalerecord/docs/the_mystery_issue/16", featured: true, preview: previewRedherring },
{ title: "People Should Care About Sports", outlet: "Yale Record", year: "2016", link: "https://issuu.com/yalerecord/docs/ydn_parody_2016_edited/2", featured: true, preview: previewSports }];


const FeaturedCard = ({ w }: {w: WritingEntry;i: number;}) =>
<a
  href={w.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group block rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">

    <div className="bg-muted/80 px-3 py-2 flex items-center gap-2 border-b border-border">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
      </div>
      <div className="flex-1 bg-background/60 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-body truncate">
        {w.link?.replace('https://', '')}
      </div>
    </div>
    {w.preview ?
  <div className="relative overflow-hidden">
        <img src={w.preview} alt={w.title} className="w-full h-auto object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <p className="text-[10px] uppercase tracking-widest text-primary-foreground/80 font-display font-bold mb-1.5">
            {w.outlet} · {w.year}
          </p>
          <h4 className="font-display font-bold text-base md:text-lg text-primary-foreground leading-snug">
            {w.title}
          </h4>
          <p className="text-xs text-primary-foreground/70 font-body mt-2">Read article →</p>
        </div>
      </div> :

  <div className="bg-background p-5 min-h-[100px] flex flex-col justify-center">
        <p className="text-[10px] uppercase tracking-widest text-primary font-display font-bold mb-2">
          {w.outlet} · {w.year}
        </p>
        <h4 className="font-display font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
          {w.title}
        </h4>
        <p className="text-xs text-muted-foreground font-body mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read article →
        </p>
      </div>
  }
  </a>;


const ListEntry = ({ w }: {w: WritingEntry;i: number;}) =>
<div>
    <a
    href={w.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block py-3 px-3 -mx-3 rounded-lg hover:bg-muted/60 transition-all duration-300">

      <h5 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
        {w.title}
      </h5>
      <p className="text-xs text-muted-foreground font-body mt-1 flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-primary/50" />
        {w.outlet} · {w.year}
      </p>
    </a>
  </div>;


const Media = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const featured = writing.filter((w) => w.featured);
  const rest = writing.filter((w) => !w.featured);

  return (
    <section id="media" className="relative py-28 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4">
        Media
      </h2>
      <p className="text-base text-muted-foreground font-body mb-14 max-w-2xl">I love to write, draw, and make people laugh. Below are some of my creative projects.

      </p>

      <div className="space-y-20">
        {/* ── Writing ── */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="inline-block px-3 py-1 rounded-md bg-primary/20 text-primary font-display font-bold text-xs uppercase tracking-widest">
              Humor Writing
            </span>
            <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-all duration-200 ${
                viewMode === "grid" ?
                "bg-background text-primary shadow-sm" :
                "text-muted-foreground hover:text-foreground"}`
                }
                aria-label="Grid view">

                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-all duration-200 ${
                viewMode === "list" ?
                "bg-background text-primary shadow-sm" :
                "text-muted-foreground hover:text-foreground"}`
                }
                aria-label="List view">

                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === "grid" ?
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                  {featured.map((w, i) =>
                <FeaturedCard key={`f-${i}`} w={w} i={i} />
                )}
                </div>

                {rest.length > 0 &&
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-1">
                    {rest.map((w, i) =>
                <ListEntry key={`r-${i}`} w={w} i={i} />
                )}
                  </div>
              }
              </motion.div> :

            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border border-border rounded-xl overflow-hidden">

                <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 px-4 py-2.5 bg-muted/60 border-b border-border text-[10px] uppercase tracking-widest font-display font-bold text-muted-foreground">
                  <span>Title</span>
                  <span>Publication</span>
                  <span>Year</span>
                </div>
                {writing.map((w, i) =>
              <a
                key={`list-${i}`}
                href={w.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[1fr_auto_auto] gap-x-6 px-4 py-3 border-b border-border last:border-b-0 hover:bg-muted/40 transition-colors duration-200 group items-center">

                    <span className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                      {w.title}
                    </span>
                    <span className="text-xs text-muted-foreground font-body whitespace-nowrap">
                      {w.outlet}
                    </span>
                    <span className="text-xs text-muted-foreground font-body tabular-nums">
                      {w.year}
                    </span>
                  </a>
              )}
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* ── Art & Other Publications ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column: Art */}
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-accent/30 text-accent-foreground font-display font-bold text-xs uppercase tracking-widest mb-8">
              Cartoons
            </span>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground font-body leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                <span>I regularly post hand-drawn, business-themed cartoons on LinkedIn. Below are two examples:</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7436786527990448128" target="_blank" rel="noopener noreferrer" className="group rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <img src={cartoonWaymo} alt="Finance people hate the F1 key but love F1 cartoon" className="w-full h-auto object-cover" />
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7430110099236560896" target="_blank" rel="noopener noreferrer" className="group rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <img src={cartoonCollars} alt="White collar layoffs cartoon" className="w-full h-auto object-cover" />
              </a>
            </div>
          </div>

          {/* Right column: Other Publications */}
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-secondary/25 text-secondary-foreground font-display font-bold text-xs uppercase tracking-widest mb-8">
              Other Writing
            </span>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground font-body leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                <span>
                  Published a research paper, Survivance through Historical Distortion in Maillardville, British Columbia, in the inaugural issue of the{" "}
                  <a href="https://macmillan.yale.edu/canada/stories/yale-committee-canadian-studies-announces-inaugural-issue-yale-journal-canadian" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Yale Journal of Canadian Studies</a>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground font-body leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                <span>
                  Featured in{" "}
                  <a href="https://www.cbc.ca/2017/whatsyourstory/what-s-your-story-yearbook-116-profiles-279-photographs-220-pages-1.4384182" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">What's Your Story? Raconte Ton Histoire</a>, CBC/Radio-Canada's personal story anthology for the 150th anniversary of Canadian confederation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

};

export default Media;