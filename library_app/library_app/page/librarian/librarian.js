frappe.pages['librarian'].on_page_load = function (wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Library Dashboard',
        single_column: true,
    });

    $(wrapper).find('.layout-main-section').html(`
        <div class="dashboard-container">
            <!-- Left Sidebar -->
            <div class="sidebar">
                <div class="librarian-details">
                    <img id="librarian-image" src="" alt="Librarian Image" class="librarian-image" />
                    <div class="librarian-info">
                        <p id="librarian-name" class="info-item"></p>
                        <p id="librarian-email" class="info-item"></p>
                        <p id="librarian-phone" class="info-item"></p>
                    </div>
                </div>

                <!-- Professional Buttons -->
                <div class="sidebar-buttons">
                    <button id="view-members-btn" class="professional-button">View Library Members</button>
                    <button id="view-issued-books-btn" class="professional-button">View Issued Books</button>
                </div>
            </div>

            <!-- Right Content -->
            <div class="stats-container">
                <div class="stats-row">
                    <div class="stats-box">
                        <h4>Total Library Members</h4>
                        <p id="total-members" class="count"></p>
                    </div>
                    <div class="stats-box">
                        <h4>Total Books</h4>
                        <p id="total-books" class="count"></p>
                    </div>
                    <div class="stats-box">
                        <h4>Total Books Issued</h4>
                        <p id="books-issued" class="count"></p>
                    </div>
                </div>
                <div class="stats-row">
                    <div class="stats-box">
                        <h4>Books Returned</h4>
                        <p id="books-returned" class="count"></p>
                    </div>
                    <div class="stats-box">
                        <h4>Users With Membership</h4>
                        <p id="overdue-books" class="count"></p>
                    </div>
                </div>
            </div>
        </div>
    `);

    // Fetch data
    frappe.call({
        method: 'library_app.library_app.page.librarian.librarian.get_dashboard_data',
        callback: function (r) {
            if (r.message) {
                const data = r.message;

                $('#librarian-image').attr('src', data.librarian.image);
                $('#librarian-name').text('Name: ' + data.librarian.name);
                $('#librarian-email').text('Email: ' + data.librarian.email);
                $('#librarian-phone').text('Phone: ' + data.librarian.phone);

                $('#total-members').text(data.total_members);
                $('#total-books').text(data.total_books);
                $('#books-issued').text(data.books_issued);
                $('#books-returned').text(data.books_returned);
                $('#users-having-membership').text(data.users_having_membership);
            }
        },
    });

    $('#view-members-btn').on('click', function () {
        frappe.set_route('List', 'Library Member'); 
    });

    $('#view-issued-books-btn').on('click', function () {
        frappe.set_route('List', 'Issued Book'); 
    });
};
