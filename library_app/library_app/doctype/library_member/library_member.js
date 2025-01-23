// Copyright (c) 2025, Interns of Korecent and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Member", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Library Member', {
    before_save: function (frm) {
        if (!frm.confirmation_shown) {
            frappe.confirm(
                'Are you sure you want to save the details of this new Library Member?',
                () => {
                    // If confirmed, set a flag and proceed with saving
                    frm.confirmation_shown = true; // Prevent re-triggering the dialog
                    frm.save(); // Manually trigger the save process
                    frappe.msgprint(__('Library Member created successfully!')); // Debug success message
                },
                () => {
                    // If canceled, prevent saving
                    frappe.msgprint(__('Save operation has been canceled.')); // Debug cancel message
                    frappe.validated = false; // Block save
                }
            );
            frappe.validated = false; // Block the save temporarily
        } else {
            // Reset the flag after confirmation
            frm.confirmation_shown = false;
        }
    }
});


frappe.ui.form.on('Library Member', {
    refresh: function (frm) {
        frm.add_custom_button('Create Membership', () => {
            frappe.new_doc('Library Membership', {
                library_member: frm.doc.name
            })
        })
        frm.add_custom_button('Create Transaction', () => {
            frappe.new_doc('Library Transaction', {
                library_member: frm.doc.name
            })
        })
    }
});
