(() => {
    const COURSE_CODE_PATTERN = /^\d{4}-.+/
    const COURSE_LINK_SELECTOR = 'a[href*="/course/view.php"]'
    const courseNames = new Map()

    function replacePageTitle () {
        for (const [courseCode, courseName] of courseNames) {
            const titlePrefix = `${courseCode}:`

            if (document.title.startsWith(titlePrefix)) {
                document.title = courseName + document.title.slice(courseCode.length)
                return
            }
        }
    }

    function replaceCourseCodes (root = document) {
        const courseLinks = []

        if (root.matches?.(COURSE_LINK_SELECTOR)) courseLinks.push(root)
        if (root.querySelectorAll) {
            courseLinks.push(...root.querySelectorAll(COURSE_LINK_SELECTOR))
        }

        for (const link of courseLinks) {
            const displayedName = link.textContent.trim()
            const courseName = link.getAttribute('title')?.trim()

            if (COURSE_CODE_PATTERN.test(displayedName) && courseName) {
                courseNames.set(displayedName, courseName)
                link.textContent = courseName
                replacePageTitle()
            }
        }
    }

    replaceCourseCodes()

    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            replaceCourseCodes(mutation.target)

            for (const addedNode of mutation.addedNodes) {
                replaceCourseCodes(addedNode)
            }

            replacePageTitle()
        }
    })

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    })
})()

