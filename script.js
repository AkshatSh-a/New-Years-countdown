const funFacts = [
    "Earth is the only planet known to support life.",
    "More than 70% of Earth's surface is covered by water.",
    "The Earth’s rotation is gradually slowing down.",
    "Earth’s core is as hot as the surface of the sun.",
    "Earth has one moon, but Mars has two.",
    "The highest point on Earth is Mount Everest.",
    "The deepest point on Earth is the Mariana Trench.",
    "The Amazon rainforest produces more than 20% of the world’s oxygen.",
    "Earth’s atmosphere is composed of 78% nitrogen, 21% oxygen, and 1% other gases.",
    "The Earth’s magnetic field protects us from harmful solar radiation.",
    "Earth is about 4.5 billion years old.",
    "The Earth’s circumference at the equator is about 40,075 kilometers.",
    "Earth’s closest star is the Sun.",
    "A day on Earth is about 24 hours long.",
    "Earth's axis is tilted at an angle of 23.5 degrees.",
    "The Earth’s surface is constantly changing due to tectonic activity.",
    "Earth is the third planet from the Sun.",
    "There are more than 7.9 billion people living on Earth.",
    "The Earth has a natural satellite called the Moon.",
    "Earth's atmosphere is about 480 kilometers thick.",
    "The Earth’s crust is made up of several large tectonic plates.",
    "The longest mountain range on Earth is the Andes.",
    "The Great Barrier Reef is the world’s largest coral reef system.",
    "The Dead Sea is one of the saltiest bodies of water on Earth.",
    "The Sahara Desert is the largest hot desert in the world.",
    "The Earth’s poles are covered by ice caps.",
    "The Earth’s gravity pulls everything towards its center.",
    "Earth’s oceans are home to millions of species.",
    "The tallest waterfall in the world is Angel Falls.",
    "The Earth’s atmosphere helps regulate the planet’s temperature.",
    "Volcanoes are found in many parts of the world, including on the ocean floor.",
    "The Earth experiences four seasons: spring, summer, autumn, and winter.",
    "The Earth’s climate varies from tropical to polar regions.",
    "The Earth’s oceans are divided into five major oceans.",
    "The Pacific Ocean is the largest and deepest ocean on Earth.",
    "The Earth’s weather patterns are influenced by its rotation.",
    "The Earth has diverse ecosystems, from rainforests to tundras.",
    "The longest river in the world is the Nile River.",
    "The Earth’s surface has about 30% land and 70% water.",
    "Mount Kilimanjaro is the highest mountain in Africa.",
    "The Earth’s atmosphere protects living organisms from the Sun’s harmful radiation.",
    "The Earth has a diverse range of plant and animal life.",
    "The average temperature of Earth’s surface is around 15°C.",
    "Earth’s orbit around the Sun is elliptical, not a perfect circle.",
    "The Earth’s surface is rich in natural resources like minerals and fossil fuels.",
    "The Mariana Trench is the deepest part of the world's oceans.",
    "The Earth’s biosphere is a closed system with limited resources."
];

function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDiff = nextYear - now;

    if (timeDiff <= 0) {
        document.querySelector('.countdown-container').style.display = 'none';
        document.getElementById('celebration').classList.remove('hidden');
        triggerFireworks();
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCountdown, 1000);
}

function triggerFireworks() {
    const container = document.querySelector('.fireworks-container');
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.width = `${Math.random() * 15 + 5}px`;
        firework.style.height = firework.style.width;
        firework.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
        container.appendChild(firework);
    }
}

function updateFunFact() {
    const factElement = document.getElementById('fun-fact');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factElement.textContent = funFacts[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    updateFunFact();
    setInterval(updateFunFact, 30000);
});
