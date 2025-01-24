// Copyright (c) 2025, Interns of Korecent and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Member", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Library Member', {
    before_save: function (frm) {
        // Check if confirmation has already been shown
        if (!frm.confirmation_shown) {
            frappe.confirm(
                'Are you sure you want to save the details of this new Library Member?',
                () => {
                    // If confirmed, allow save by setting the flag
                    frm.confirmation_shown = true; // Prevent re-triggering
                    frm.save().then(() => {
                        // Show a success message after the save is complete
                        frappe.msgprint(__('Library Member has been added successfully!'));
                    });
                },
                () => {
                    // If canceled, prevent saving
                    frappe.msgprint(__('Save operation has been canceled.'));
                    frappe.validated = false; // Block save
                }
            );
            frappe.validated = false; // Temporarily block save
        } else {
            // Reset the flag after successful confirmation
            frm.confirmation_shown = false;
        }
    },
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

