
// SUBSCRIBE ==> https://www.youtube.com/albdev
// SUBSCRIBE ==> https://www.youtube.com/albdev

const buttons = document.querySelectorAll('.letter1')
const textarea = document.querySelector('textarea')


const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const space_btn = document.querySelector('.space')
const enter_btn = document.querySelector('.enter');
const youtube_btn = document.querySelector('.youtubee');
const google_btn = document.querySelector('.ggoogl');
const translateGoogleBtn = document.querySelector('.translate');
let chars = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

translateGoogleBtn.addEventListener('click', () => {
    const textToTranslate = textarea.value.trim();
    
    if (textToTranslate) {
        const targetLanguage = 'en'; // Change this to your desired target language code
        
        // Construct the Google Translate URL
        const googleTranslateUrl = `https://translate.google.com/?sl=auto&tl=${targetLanguage}&text=${encodeURIComponent(textToTranslate)}`;
        
        // Open Google Translate in a new tab
        window.open(googleTranslateUrl, '_blank');
    }
});
space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
});

youtube_btn.addEventListener('click', () => {
    const searchText = textarea.value.trim(); // Get the text from the textarea
    if (searchText) {
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchText)}`;
        window.open(youtubeSearchUrl, '_blank'); // Open YouTube search in a new tab
    }
});

google_btn.addEventListener('click', () => {
    const searchText = textarea.value.trim();
    if (searchText) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
        window.open(googleSearchUrl, '_blank');
    }
});

enter_btn.addEventListener('click', () => {
    chars.push('\n'); // Add a newline character
    textarea.value = chars.join('');
});

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})

// SUBSCRIBE ==> https://www.youtube.com/albdev
// SUBSCRIBE ==> https://www.youtube.com/albdev