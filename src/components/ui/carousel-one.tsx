      
      
      
      
      
      
<div className="lg:w-1/2 relative pb-24">
            <div className="relative" style={{ height: "600px" }}>
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div // Current Project
                  key={`current-${currentIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.5 }}
                  className="absolute top-0 left-0 w-full"
                >
                  <ProjectCard project={projects[currentIndex]} />
                </motion.div>

                {direction >= 0 && (
                  <motion.div
                    key={`preview-${getNextIndex(currentIndex)}`} // Preview of Next Project
                    initial={{ opacity: 0.3, x: "130%" }}
                    animate={{ opacity: 0.3, x: "100%" }}
                    exit={{ opacity: 0, x: "0%" }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="absolute top-0 w-10/12 pointer-events-none"
                  >
                    <ProjectCard
                      project={projects[getNextIndex(currentIndex)]}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>