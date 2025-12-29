document.addEventListener('DOMContentLoaded', () => {
        const trigger = document.querySelector('.toggle-trigger');
        const arrow = document.getElementById('expand-arrow');
        const wrapper = document.getElementById('neighbor-wrapper');

        trigger.addEventListener('click', () => {
            // Toggle the visibility classes
            wrapper.classList.toggle('collapsed');
            wrapper.classList.toggle('expanded');
            
            // Rotate the arrow icon
            arrow.classList.toggle('active');
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    const cpuBtn = document.getElementById('btn');
    
    // The code that will be copied to the clipboard
    const codeToCopy = '<a href="https://dec1phr.github.io/" target="_blank"><img src="https://dec1phr.github.io/core1.png" alt="Decyphr"></a>';

    cpuBtn.addEventListener('click', () => {
        // Copy to clipboard
        navigator.clipboard.writeText(codeToCopy).then(() => {
            // Standard browser alert box
            alert("Code copied! Now paste it into your website.");
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});
