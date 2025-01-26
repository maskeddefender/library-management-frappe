# Copyright (c) 2025, Interns of Korecent and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator
from frappe.model.document import Document


class LibraryMember(WebsiteGenerator):
    def before_save(self):
        self.full_name = f'{self.first_name} {self.last_name or ""}'

@frappe.whitelist()
def get_books_issued_by_member(membership_id):
    """
    Fetch all books issued to a library member based on their Membership ID.
    """
    books = frappe.get_all(
        'Library Transaction',
        filters={
            'library_member': membership_id,
            'type': 'Issue'  # Filter for issued books
        },
        fields=['article']
    )
    return books
