const carouselElement = document.getElementById('carousel-example');

const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3'),
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4'),
    },
];

// options with default values
const options = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses:
            'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2'),
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3'),
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4'),
            },
        ],
    },

    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: () => {
        console.log('previous slider item is shown');
    },
    onChange: () => {
        console.log('new slider item has been shown');
    },
};

// instance options object
const instanceOptions = {
  id: 'carousel-example',
  override: true
};

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("rotator-prev");
    const nextBtn = document.getElementById("rotator-next");
    const pauseBtn = document.getElementById("rotator-pause");

    // Replace these with your actual slide control functions
    function showPrevSlide() {
        document.getElementById("data-carousel-prev")?.click();
    }
    function showNextSlide() {
        document.getElementById("data-carousel-next")?.click();
    }
    function pauseCarousel() {
        // Implement your pause logic here if you have autoplay
        // Example: clearInterval(yourInterval)
    }

    if (prevBtn) prevBtn.addEventListener("click", showPrevSlide);
    if (nextBtn) nextBtn.addEventListener("click", showNextSlide);
    if (pauseBtn) pauseBtn.addEventListener("click", pauseCarousel);

    const items = document.querySelectorAll('[data-carousel-item]');
    const indicators = [
        document.getElementById('carousel-indicator-1'),
        document.getElementById('carousel-indicator-2'),
        document.getElementById('carousel-indicator-3'),
        document.getElementById('carousel-indicator-4')
    ];
    let current = 0;
    let interval = null;
    let paused = false;

    function showSlide(idx) {
        items.forEach((item, i) => {
            if (i === idx) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
        indicators.forEach((btn, i) => {
            btn.setAttribute('aria-current', i === idx ? 'true' : 'false');
            btn.classList.toggle('bg-green-500', i === idx);
            btn.classList.toggle('bg-gray-400', i !== idx);
        });
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % items.length);
    }

    function prevSlide() {
        showSlide((current - 1 + items.length) % items.length);
    }

    function startAuto() {
        interval = setInterval(() => {
            if (!paused) nextSlide();
        }, 4000);
    }

    function stopAuto() {
        clearInterval(interval);
    }

    // Button events
    document.getElementById('rotator-next').onclick = () => { nextSlide(); };
    document.getElementById('rotator-prev').onclick = () => { prevSlide(); };
    document.getElementById('rotator-pause').onclick = () => { paused = !paused; };

    // Indicator events
    indicators.forEach((btn, i) => {
        btn.onclick = () => { showSlide(i); };
    });

    showSlide(0);
    startAuto();
});
