

document.addEventListener("DOMContentLoaded", function() {
    // Example data for currently borrowed books and borrowing history
    const borrowedBooks = [
        { title: "The Midnight Library", dueDate: "2024-10-10" },
        { title: "Again,but better", dueDate: "2024-10-15" },
    ];

    const history = [
        { title: "The Forty Rules Of Love", returnedOn: "2024-09-20" },
        { title: "Anna Karnina", returnedOn: "2024-09-30" },
    ];

    // Populate the borrowed books list
    const borrowedBooksList = document.getElementById('borrowedBooksList');
    borrowedBooks.forEach(book => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${book.title} - Due: ${book.dueDate}`;
        
        // Add renew button
        const renewBtn = document.createElement('button');
        renewBtn.className = 'btn btn-sm btn-primary';
        renewBtn.textContent = 'Renew';
        renewBtn.addEventListener('click', function() {
            $('#renewModal').modal('show');
        });

        li.appendChild(renewBtn);
        borrowedBooksList.appendChild(li);
    });

    // Populate borrowing history list
    const historyList = document.getElementById('historyList');
    history.forEach(record => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${record.title} - Returned on: ${record.returnedOn}`;
        historyList.appendChild(li);
    });
});
    