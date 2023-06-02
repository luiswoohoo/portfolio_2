function scrollToAnchor(selectedAnchor) {
    if (!document.querySelector(selectedAnchor)) {
        window.location.href = `http://localhost:3000/${selectedAnchor}`
    } else {
        document.querySelector(selectedAnchor).scrollIntoView({
            behavior: 'smooth',
        })
    }
}
