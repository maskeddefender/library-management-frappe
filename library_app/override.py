import frappe
# from frappe import _
# from frappe.utils import get_url_to_form

# @frappe.whitelist(allow_guest=True)
def login_redirection():
    """
    Redirect user after login based on their role.
    Librarian is redirected to their profile, 
    and Library Member is redirected to the article page.
    """
    user = frappe.session.user  # Get the logged-in user's username
    
    if user == "librariankorecent@gmail.com":
        # Redirect to Librarian's profile page
        frappe.local.response['home_page'] = f"/app/librarian"
    elif user == "administrator":
        # Redirect to the Article page
        frappe.local.response['home_page'] = "app/users"
    else:
        # Redirect to the Article page
        frappe.local.response['home_page'] = "article_doc"