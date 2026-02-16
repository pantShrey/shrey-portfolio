import { ExternalLink, Github, Linkedin, Mail, BookOpen } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="font-mono font-bold text-lg">sp</div>
          <div className="flex gap-6">
            <a href="#projects" className="text-sm hover:text-accent transition-colors">
              projects
            </a>
            <a href="#experience" className="text-sm hover:text-accent transition-colors">
              experience
            </a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">
              skills
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container py-20 max-w-4xl">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-mono font-bold mb-2">Shrey Pant</h1>
              <p className="text-xl text-muted-foreground font-mono">
                Systems Engineer · Rust · Scala · Distributed Systems
              </p>
            </div>
            <p className="text-lg leading-relaxed max-w-2xl">
              Building efficient, low-level systems with a focus on distributed systems and database internals. 
              Experienced with functional programming paradigms and open-source contributions. Currently exploring 
              the intersection of ML inference and systems programming.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/pantShrey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors"
              >
                <Github size={20} />
                <span>github</span>
              </a>
              <a
                href="https://linkedin.com/in/shreypant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
                <span>linkedin</span>
              </a>
              <a
                href="mailto:pantshrey@gmail.com"
                className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors"
              >
                <Mail size={20} />
                <span>email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="border-b border-border">
        <div className="container py-20 max-w-4xl">
          <h2 className="text-3xl font-mono font-bold mb-12">Featured Projects</h2>
          
          <div className="space-y-12">
                        {/* Vilcacora */}
                        <div className="border-t border-border pt-12 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-mono font-bold">Vilcacora</h3>
                  <p className="text-sm text-muted-foreground font-mono mt-1">Scala Native · ML Inference · GSoC 2025</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/pantShrey/vilcacora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://gist.github.com/pantShrey/70e289b9025e49d65289b1195bad5083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors"
                  >
                    <BookOpen size={16} />
                  </a>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                ONNX runtime for Cats Effect Native enabling ML inference in Scala. Built as part of Google Summer 
                of Code 2025 with the Typelevel community. Bridges functional programming with low-level ML operations 
                through advanced FFI design. Supports LibSVM and MLPack with proper resource management and memory safety.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono">Scala</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono">ML</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono">Functional</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono">GSoC</span>
              </div>
            </div>

          <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-mono font-bold">Purrvision Control Plane</h3>
                  <p className="text-sm text-muted-foreground font-mono mt-1">Kubernetes · Orchestration · Python</p>
                </div>
                <a href="https://github.com/pantShrey/purrvision" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-base leading-relaxed">
                A production-grade control plane for provisioning isolated WooCommerce environments on Kubernetes. 
                Engineered an asynchronous orchestrator pattern using FastAPI, Redis, and RQ workers to manage automated 
                Helm deployments. Implemented a self-healing sidecar pattern for database initialization and enforced 
                strict zero-trust tenant security via dedicated namespaces and hard resource quotas.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Kubernetes', 'Helm', 'Python', 'System Design', 'Redis'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono">{tag}</span>
                ))}
              </div>
            </div>
            {/* Bitcask Implementation */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-mono font-bold">Bitcask Implementation</h3>
                  <p className="text-sm text-muted-foreground font-mono mt-1">Rust · Log-Structured Storage</p>
                </div>
                <a
                  href="https://github.com/pantShrey/bitcask_impl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-base leading-relaxed">
                A persistent, log-structured key-value store inspired by Bitcask. Implements fast writes using 
                append-only logs, in-memory indexing with HashMap, automatic compaction, and crash recovery. 
                Demonstrates deep understanding of database internals, memory management, and performance optimization.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono">Rust</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono">KV Store</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono">Storage</span>
              </div>
            </div>


            {/* Other Notable Projects */}
            <div className="border-t border-border pt-12 space-y-4">
              <h3 className="text-2xl font-mono font-bold">Other Notable Projects</h3>
              
              <div className="space-y-6 pt-4">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-mono font-bold">Ringg RAG</h4>
                      <p className="text-sm text-muted-foreground font-mono">Multi-source Retrieval-Augmented Generation</p>
                    </div>
                    <a
                      href="https://github.com/pantShrey/ringg_rag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    project exploring multi-source RAG implementations
                  </p>
                </div>

                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-mono font-bold">MQL Generator</h4>
                      <p className="text-sm text-muted-foreground font-mono">Natural Language to MongoDB Query</p>
                    </div>
                    <a
                      href="https://github.com/pantShrey/mql-generator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Converts natural language queries to MongoDB query language
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-border">
        <div className="container py-20 max-w-4xl">
          <h2 className="text-3xl font-mono font-bold mb-12">Experience</h2>
          
          <div className="space-y-8">
            {/* GSoC 2025 */}
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-mono font-bold">Google Summer of Code 2025</h3>
                  <p className="text-sm text-muted-foreground font-mono">Typelevel Community</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">2025</span>
              </div>
              <p className="text-base leading-relaxed">
                Developed Vilcacora, an ONNX runtime for Cats Effect Native. Implemented complete pipeline from 
                ONNX protobuf to executable IOs, integrated LibSVM and MLPack support, and created type-safe 
                intermediate representation for ML operations.
              </p>
            </div>

            {/* Open Source Contributions */}
            <div className="border-t border-border pt-8 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-mono font-bold">Open Source Contributor</h3>
                  <p className="text-sm text-muted-foreground font-mono">Cats Effect, HelixDB</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">2025</span>
              </div>
              <p className="text-base leading-relaxed">
                Active contributor to Cats Effect library and HelixDB organization. Worked on functional resource 
                management patterns and concurrent programming with fibers.
              </p>
            </div>

            {/* Freelance Work */}
            <div className="border-t border-border pt-8 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-mono font-bold">Freelance Developer</h3>
                  <p className="text-sm text-muted-foreground font-mono">HelixDB Organization</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">2025</span>
              </div>
              <p className="text-base leading-relaxed">
              Engineered an external orchestration layer using Rust and Podman to manage database container lifecycles. Developed the official n8n integration suite, creating adapters that bridge standard database operations with existing Model Context Protocol (MCP) endpoints.
              </p>
            </div>

            {/* Internship */}
            <div className="border-t border-border pt-8 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-mono font-bold">Software Engineering Internship</h3>
                  <p className="text-sm text-muted-foreground font-mono">Plotch (AI)</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">Jun - Oct 2024</span>
              </div>
              <p className="text-base leading-relaxed">
                Built AI-powered e-commerce platform targeting native languages and customers. Developed comprehensive data pipelines 
                for the platform, gaining hands-on experience with full-stack development and data engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-border">
        <div className="container py-20 max-w-4xl">
          <h2 className="text-3xl font-mono font-bold mb-12">Skills</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Rust', 'Scala', 'Python', 'TypeScript'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Specializations</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Distributed Systems',
                  'Database Internals',
                  'Systems Programming',
                  'Functional Programming',
                  'Log-Structured Storage',
                  'Memory Management'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Tools & Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Cats Effect',
                  'ONNX',
                  'LibSVM',
                  'MLPack',
                  'Scala Native',
                  'Http4s'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-bold mb-4">
                Cloud & Orchestration
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Helm', 'Docker', 'Podman', 'RabbitMQ', 'Redis'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground font-mono text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-border">
        <div className="container py-20 max-w-4xl">
          <h2 className="text-3xl font-mono font-bold mb-8">Get in Touch</h2>
          
          <p className="text-base leading-relaxed mb-8 max-w-2xl">
            Interested in discussing systems engineering, distributed systems, or opportunities? 
            Feel free to reach out through any of the channels below.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:pantshrey@gmail.com"
              className="inline-flex items-center gap-3 text-lg font-mono text-accent hover:text-foreground transition-colors"
            >
              <Mail size={24} />
              <span>pantshrey@gmail.com</span>
            </a>
            <a
              href="https://github.com/pantShrey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg font-mono text-accent hover:text-foreground transition-colors"
            >
              <Github size={24} />
              <span>github.com/pantShrey</span>
            </a>
            <a
              href="https://linkedin.com/in/shreypant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg font-mono text-accent hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
              <span>linkedin.com/in/shreypant</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground font-mono text-center">
            © 2025 Shrey Pant. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}