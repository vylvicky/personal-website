import { motion } from "framer-motion";
import { Globe, Languages, TrendingUp, Rocket, Landmark, GraduationCap, Building2, Mic, Music, Heart, Briefcase, Palette } from "lucide-react";

import summitLogo from "@/assets/logos/summit-partners.png";
import stackadaptLogo from "@/assets/logos/stackadapt.png";
import rnlLogo from "@/assets/logos/ruffalo-noel-levitz.png";
import sanaLogo from "@/assets/logos/sana.png";
import workdayLogo from "@/assets/logos/workday.svg";
import evercoreLogo from "@/assets/logos/evercore.png";
import roadieLogo from "@/assets/logos/roadie.png";
import jumioLogo from "@/assets/logos/jumio.png";
import smartbearLogo from "@/assets/logos/smartbear.png";
import farelogixLogo from "@/assets/logos/farelogix.png";
import iiLogo from "@/assets/logos/innovative-interfaces.png";
import goodrxLogo from "@/assets/logos/goodrx.png";
import hbsLogo from "@/assets/logos/hbs.png";
import yaleLogo from "@/assets/logos/yale.svg";
import yaleWhiffenpoofs from "@/assets/logos/yale-whiffenpoofs.gif";
import yalePierson from "@/assets/logos/yale-pierson.png";
import yaleActivity3 from "@/assets/logos/yale-activity3.png";
import yaleActivity4 from "@/assets/logos/yale-activity4.png";
import yaleActivity5 from "@/assets/logos/yale-activity5.png";
import louisvilleLogo from "@/assets/logos/louisville.png";
import fearlessLogo from "@/assets/logos/261fearless.png";
import rcmLogo from "@/assets/logos/rcm.png";
import synergistLogo from "@/assets/logos/synergist.png";
import afLogo from "@/assets/logos/alliance-francaise.png";
import bostonBalletLogo from "@/assets/logos/boston-ballet.svg";
import dtiLogo from "@/assets/logos/dti-ghana.png";
import lawFoundationLogo from "@/assets/logos/law-foundation-bc.png";
import poetryInVoiceLogo from "@/assets/logos/poetry-in-voice.jpg";
import cpfConcoursLogo from "@/assets/logos/cpf-concours.png";
import speechCompLogo from "@/assets/logos/speech-competition.png";

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
};

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
}

const BentoCard = ({ className = "", children }: BentoCardProps) =>
<motion.div
  variants={item}
  className={`group relative rounded-3xl border border-border/60 backdrop-blur-md overflow-hidden hover-scale cursor-default ${className}`}>

    {children}
  </motion.div>;


const LogoImg = ({ src, alt, className = "" }: {src: string;alt: string;className?: string;}) =>
<img src={src} alt={alt} className={`object-contain ${className}`} />;

const LinkedLogo = ({ src, alt, href, className = "" }: {src: string;alt: string;href: string;className?: string;}) =>
<a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex">
  <img src={src} alt={alt} className={`object-contain ${className}`} />
</a>;


const SelectedWork = () => {
  return (
    <section id="work" className="relative py-28 px-6 md:px-12 lg:px-24 bg-secondary">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4">

        Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-base text-muted-foreground font-body mb-16">I've led $10B+ in transactions as an investor and advisor. I've also designed and sold print magazine ads, scaled online fan communities, and performed poetry and comedy on stage. Excited for what's to come!  


      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 auto-rows-auto lg:auto-rows-[160px] gap-3 md:gap-4 lg:gap-5">

        {/* 1 · Summit Partners — Growth Equity (Large) */}
        <BentoCard className="col-span-4 md:col-span-4 lg:col-span-6 row-span-1 md:row-span-2 bg-muted p-5 md:p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70"><TrendingUp className="w-4 h-4 shrink-0" />Growth Equity</span>
            <div className="mt-5">
              <LinkedLogo src={summitLogo} alt="Summit Partners" href="https://www.summitpartners.com/" className="h-12 md:h-18 w-auto" />
            </div>
          </div>
          <div className="mt-auto space-y-4">
            <p className="text-sm font-body text-foreground/70 leading-relaxed">Sourced and executed technology investments</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex flex-col">
                <p className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/50 mb-1.5">Select Investments</p>
                <div className="h-9 flex items-center">
                  <LinkedLogo src={stackadaptLogo} alt="StackAdapt" href="https://www.summitpartners.com/companies/stackadapt" className="h-6 w-auto mix-blend-multiply" />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/50 mb-1.5">Portfolio Management</p>
                <div className="h-9 flex items-center">
                  <LinkedLogo src={rnlLogo} alt="Ruffalo Noel Levitz" href="https://www.summitpartners.com/companies/ruffalo-noel-levitz" className="h-9 w-auto mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 2 · Sana — Startup Ops (Medium) */}
        <BentoCard className="col-span-4 md:col-span-4 lg:col-span-3 row-span-1 md:row-span-2 bg-foreground text-primary-foreground p-4 md:p-5 lg:p-6 flex flex-col justify-between">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-muted/60"><Rocket className="w-4 h-4 shrink-0" />Startup Operations</span>
            <div className="mt-5">
              <LinkedLogo src={sanaLogo} alt="Sana" href="https://sanalabs.com/" className="h-12 md:h-18 w-auto brightness-0 invert" />
            </div>
          </div>
          <div className="mt-auto space-y-1.5">
            <p className="text-sm font-body text-muted/70 leading-relaxed">Built and scaled go-to-market systems at an AI learning platform</p>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-body text-primary font-semibold leading-relaxed">Acquired by</p>
              <LinkedLogo src={workdayLogo} alt="Workday" href="https://newsroom.workday.com/2025-11-04-Workday-Completes-Acquisition-of-Sana" className="h-6 w-auto" />
            </div>
          </div>
        </BentoCard>

        {/* 3 · Evercore — Investment Banking (Medium) */}
        <BentoCard className="col-span-4 md:col-span-4 lg:col-span-3 row-span-1 md:row-span-2 bg-background p-4 md:p-5 lg:p-6 flex flex-col justify-between">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70"><Landmark className="w-4 h-4 shrink-0" />Investment Banking</span>
            <div className="mt-5">
              <LinkedLogo src={evercoreLogo} alt="Evercore" href="https://www.evercore.com/" className="h-12 md:h-18 w-auto mix-blend-multiply" />
            </div>
          </div>
          <div className="mt-auto space-y-2">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">Advised technology businesses on M&A, capital raises, and IPOs

            </p>
            <div>
              <p className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/50 mb-1.5">Select Transactions</p>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                {[{ src: roadieLogo, alt: "Roadie", href: "https://www.roadie.com/blog/2021/10/roadie-is-proud-to-be-a-ups-company" },
                { src: jumioLogo, alt: "Jumio", href: "https://www.jumio.com/about/press-releases/great-hill-partners/" },
                { src: smartbearLogo, alt: "SmartBear", href: "https://smartbear.com/news/news-releases/smartbear-completes-investment-transaction/" },
                { src: farelogixLogo, alt: "Farelogix", href: "https://www.businesswire.com/news/home/20200727005091/en/Accelya-Completes-Acquisition-of-Farelogix" },
                { src: iiLogo, alt: "Innovative Interfaces", href: "https://iii.com/news/ex-libris-completes-the-acquisition-of-innovative/" },
                { src: goodrxLogo, alt: "GoodRx", href: "https://investors.goodrx.com/news-releases/news-release-details/goodrx-announces-closing-initial-public-offering-and-full?mobile=1&mobile=1&mobile=1&mobile=1" }].
                map((logo) =>
                <LinkedLogo key={logo.alt} src={logo.src} alt={logo.alt} href={logo.href} className="h-6 w-auto mix-blend-multiply" />
                )}
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 4 · HBS — MBA */}
        <BentoCard className="col-span-4 md:col-span-4 lg:col-span-4 row-span-1 md:row-span-2 bg-foreground text-primary-foreground p-4 md:p-5 lg:p-6 flex flex-col justify-between">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-muted/60"><GraduationCap className="w-4 h-4 shrink-0" />Graduate School</span>
            <div className="mt-5">
              <LinkedLogo src={hbsLogo} alt="Harvard Business School" href="https://www.hbs.edu/" className="h-[72px] w-auto" />
            </div>
          </div>
          <div className="mt-auto space-y-3">
            <p className="text-sm font-body text-muted/70 leading-relaxed">​Master in Business Administration with First-Year Honors       </p>
            <div>
              <p className="text-[10px] font-display font-bold uppercase tracking-widest text-muted/50 mb-1.5">Advisory Projects</p>
              <div className="flex items-center gap-3">
                <LinkedLogo src={bostonBalletLogo} alt="Boston Ballet" href="https://www.bostonballet.org/" className="h-9 w-auto brightness-0 invert" />
                <LinkedLogo src={dtiLogo} alt="Design and Technology Institute" href="https://dtiafrica.com/" className="h-9 w-auto brightness-0 invert" />
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 5 · Yale — BA */}
        <BentoCard className="col-span-4 md:col-span-4 lg:col-span-4 row-span-1 md:row-span-2 bg-muted p-4 md:p-5 lg:p-6 flex flex-col justify-between">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70"><GraduationCap className="w-4 h-4 shrink-0" />Undergraduate Education</span>
            <div className="mt-5">
              <LinkedLogo src={yaleLogo} alt="Yale University" href="https://www.yale.edu/" className="h-[72px] w-auto" />
            </div>
          </div>
          <div className="mt-auto space-y-3">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">Bachelor of Arts in Political Science and French, Phi Beta Kappa and magna cum laude            </p>
            <div>
              <p className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/50 mb-1.5">Activities</p>
              <div className="flex items-center gap-3">
                <LinkedLogo src={yaleWhiffenpoofs} alt="Whiffenpoofs" href="https://yalerecord.org/" className="h-[30px] w-auto mix-blend-multiply" />
                <LinkedLogo src={yalePierson} alt="Pierson College" href="https://pierson.yale.edu/people/head-colleges-office" className="h-[30px] w-auto mix-blend-multiply" />
                <LinkedLogo src={yaleActivity3} alt="AACC" href="https://aacc.yale.edu/" className="h-[30px] w-auto mix-blend-multiply" />
                <LinkedLogo src={yaleActivity4} alt="Yale Model Congress" href="https://www.yalemodelcongress.com/" className="h-[30px] w-auto" />
                <LinkedLogo src={yaleActivity5} alt="Yale Grammatical Diversity Project" href="https://ygdp.yale.edu/" className="h-[30px] w-auto mix-blend-multiply" />
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 6 · RCM — Music Theory */}
        <BentoCard className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1 bg-background p-4 md:p-5 flex flex-col justify-between">
          <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70 mb-3"><Music className="w-4 h-4 shrink-0" />Music</span>
          <LinkedLogo src={rcmLogo} alt="Royal Conservatory of Music" href="https://www.rcmusic.com/" className="h-[48px] max-w-full w-auto object-contain" />
          <p className="text-xs font-body text-muted-foreground leading-snug mt-auto">Pianist and music theory teacher</p>
        </BentoCard>

        {/* 7 · 261 Fearless — Nonprofit */}
        <BentoCard className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1 bg-foreground p-4 md:p-5 flex flex-col justify-between">
          <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-muted/60 mb-3"><Heart className="w-4 h-4 shrink-0" />FUNDRAISING</span>
          <LinkedLogo src={fearlessLogo} alt="261 Fearless" href="https://www.261fearless.org/" className="h-[48px] max-w-full w-auto object-contain invert mix-blend-lighten" />
          <p className="text-xs font-body text-muted/70 leading-snug mt-auto">2024 Boston Marathon charity team</p>
        </BentoCard>

        {/* 8 · Synergist */}
        <BentoCard className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1 bg-muted p-4 md:p-5 flex flex-col justify-between">
          <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70 mb-3"><Briefcase className="w-4 h-4 shrink-0" />Nonprofit</span>
          <LinkedLogo src={synergistLogo} alt="Synergist" href="https://www.synergistnetwork.com/" className="h-[48px] max-w-full w-auto object-contain mix-blend-multiply" />
          <p className="text-xs font-body text-muted-foreground leading-snug mt-auto">Boston chapter co-president</p>
        </BentoCard>

        {/* 9 · Alliance Française */}
        <BentoCard className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1 bg-background p-4 md:p-5 flex flex-col justify-between">
          <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70 mb-3"><Palette className="w-4 h-4 shrink-0" />Culture</span>
          <LinkedLogo src={afLogo} alt="Alliance Française" href="https://www.afscv.org/" className="h-[48px] max-w-full w-auto object-contain mix-blend-multiply" />
          <p className="text-xs font-body text-muted-foreground leading-snug mt-auto">Board member</p>
        </BentoCard>

        {/* 10 · Louisville Metro — Government */}
        <BentoCard className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1 bg-background p-4 md:p-5 flex flex-col justify-between">
          <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70 mb-3"><Building2 className="w-4 h-4 shrink-0" />Government</span>
          <LinkedLogo src={louisvilleLogo} alt="Louisville Metro" href="https://louisvilleky.gov/government/continuous-improvement" className="h-[48px] max-w-full w-auto object-contain mix-blend-multiply" />
          <p className="text-xs font-body text-muted-foreground leading-snug mt-auto">City consultant</p>
        </BentoCard>

        {/* 11 · Global Experience */}
        <BentoCard className="col-span-4 md:col-span-3 lg:col-span-3 row-span-1 bg-muted p-4 md:p-5 flex flex-col">
          <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70 mb-3"><Globe className="w-4 h-4 shrink-0" />Global Experience</span>
          <div className="flex items-center gap-2 my-auto">
            <span className="text-base" aria-label="United States">🇺🇸</span>
            <span className="text-base" aria-label="Germany">🇩🇪</span>
            <span className="text-base" aria-label="Sweden">🇸🇪</span>
          </div>
        </BentoCard>

        {/* 12 · Languages */}
        <BentoCard className="col-span-4 md:col-span-3 lg:col-span-3 row-span-1 bg-foreground p-4 md:p-5 flex flex-col">
          <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-muted/60 mb-3"><Languages className="w-4 h-4 shrink-0" />Languages</span>
          <p className="text-xs font-body text-muted/70 my-auto leading-snug">English · French · Mandarin</p>
        </BentoCard>

        {/* 13 · Public Speaking */}
        <BentoCard className="col-span-4 md:col-span-8 lg:col-span-4 row-span-1 bg-background p-4 md:p-5 flex flex-col justify-between">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-foreground/70"><Mic className="w-4 h-4 shrink-0" />Public Speaking</span>
            <p className="text-sm font-body text-foreground/70 leading-relaxed mt-2">Former nationally ranked bilingual public speaker in Canada     </p>
          </div>
          <div className="mt-auto">
            <p className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/50 mb-1.5">Competitions</p>
            <div className="flex flex-wrap items-center gap-3">
              <LinkedLogo src={lawFoundationLogo} alt="Law Foundation of BC" href="https://www.bcdebate.ca/lawfoundationcup" className="h-6 w-auto mix-blend-multiply" />
              <LinkedLogo src={poetryInVoiceLogo} alt="Poetry in Voice" href="https://poetryinvoice.ca/" className="h-6 w-auto mix-blend-multiply" />
              <LinkedLogo src={cpfConcoursLogo} alt="CPF Concours" href="https://cpf.ca/concours-dart-oratoire/" className="h-6 w-auto mix-blend-multiply" />
              <LinkedLogo src={speechCompLogo} alt="Speech Competition" href="https://www.csdf-fcde.ca/" className="h-6 w-auto mix-blend-multiply" />
            </div>
          </div>
        </BentoCard>
      </motion.div>
    </section>);

};

export default SelectedWork;