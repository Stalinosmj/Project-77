const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
        }
        // else {
        //     entry.target.classList.remove('animate-show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.animate-hidden');
hiddenElements.forEach(element => observer.observe(element));