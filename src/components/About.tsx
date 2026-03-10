import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-12"
      >
        About
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed"
      >
        <p>
          I have spent the past decade working at the intersection of
          technology, media, and strategy. My background is in [your field],
          but my interests have always been broader — I care about how systems
          work, why people make the choices they do, and what it takes to build
          things that last.
        </p>
        <p>
          Before my current work, I [brief career context — e.g., "spent
          several years at a research lab" or "worked with early-stage
          companies"]. That experience shaped how I think about problems:
          carefully, from multiple angles, with attention to both the details
          and the larger picture.
        </p>
        <p>
          Outside of work, I am interested in [your interests — e.g.,
          "architecture, long-distance running, and the history of
          infrastructure"]. I read widely and believe that good ideas come
          from unexpected places.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
