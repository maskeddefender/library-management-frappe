# Copyright (c) 2025, Interns of Korecent and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class LibraryMember(Document):
<<<<<<< HEAD
	def before_save(self):
		self.full_name = f'{self.first_name} {self.last_name or ""}'
	

=======
	pass
>>>>>>> 24490c040e6ffc5c2bfd9b33c97a3b4b209af8b2
