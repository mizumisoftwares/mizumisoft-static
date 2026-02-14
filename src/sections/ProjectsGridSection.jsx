import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const ProjectsGridSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Product', 'Brand', 'Editorial']

  const projects = [
    { title: 'Lumina Health', tags: ['Product', 'Web'], image: '/featured_workspace.jpg' },
    { title: 'Northwind Journal', tags: ['Editorial', 'Web'], image: '/process_desk.jpg' },
    { title: 'Kite Banking', tags: ['Product', 'UI'], image: '/capabilities_meeting.jpg' },
    { title: 'Alma Skincare', tags: ['Brand', 'Web'], image: '/studio_table.jpg' },
    { title: 'Civic Maps', tags: ['Product', 'UI'], image: '/collab_presenting.jpg' },
    { title: 'Moss Agency', tags: ['Brand', 'Editorial'], image: '/testimonial_chat.jpg' },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#F4F6F8] py-[8vh] px-[6vw]"
    >
      {/* Header */}
      <div
        className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="text-[clamp(34px,3.6vw,54px)] font-semibold text-[#111216]">
          Selected projects
        </h2>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-[#111216] text-white'
                  : 'bg-white text-[#111216]/70 hover:text-[#111216] border border-[#111216]/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(14px,1.6vw,22px)]">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className={`group cursor-pointer transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="relative overflow-hidden rounded-[22px] mb-4 aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[#111216]/0 group-hover:bg-[#111216]/20 transition-colors duration-300" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={18} className="text-[#111216]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#111216] mb-2 group-hover:text-[#2F6BFF] transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#6B7280] bg-[#111216]/5 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsGridSection
