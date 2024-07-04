document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 400,
        transition: 500,
        interval: 3000
    });
    
    loadBooks();
});

function loadBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const booksContainer = document.querySelector('.books-container');
            booksContainer.innerHTML = data.books.map(book => `
                <article class="col s12 m6">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title"><b>${book.title}</b></span>
                            <hr>
                            <p>${book.description}</p>
                        </div>
                        <div class="card-action"><a href="${book.link}" target="_blank">Ver detalhes</a></div>
                    </div>
                </article>
            `).join('');
        })
        .catch(error => console.error('Error loading books:', error));
}
