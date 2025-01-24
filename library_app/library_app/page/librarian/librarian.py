import frappe

@frappe.whitelist()
def get_dashboard_data():
    librarian = frappe.get_all("Librarian Administrator", fields=["name", "email", "phone", "image"], limit=1)
    librarian_data = librarian[0] if librarian else {"name": "N/A", "email": "N/A", "phone": "N/A", "image": None}

    total_members = frappe.db.count("Library Member")
    total_books = frappe.db.count("Article")
    books_issued = frappe.db.count("Library Transaction", filters={"type": "Issue"})
    books_returned = frappe.db.count("Library Transaction", filters={"type": "Return"})
    users_having_membership = frappe.db.count("Library Membership")

    return {
        "librarian": librarian_data,
        "total_members": total_members,
        "total_books": total_books,
        "books_issued": books_issued,
        "books_returned": books_returned,
        "users_having_membership": users_having_membership,
    }
