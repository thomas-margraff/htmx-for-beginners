const createBookTemplate = (book) => /*html*/ `
    <li data-id="${book.id}">
        <div class="details">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        </div>
        <div class="actions">
            <button >Delete</button>
        </div>
    </li>
`;

export default createBookTemplate;