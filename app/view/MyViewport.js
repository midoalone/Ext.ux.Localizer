/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',


    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    title: 'My Panel',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'MyButton'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'cycle',
                                    itemId: 'language',
                                    showText: true,
                                    menu: {
                                        xtype: 'menu',
                                        width: 120,
                                        items: [
                                            {
                                                xtype: 'menucheckitem',
                                                itemId: 'en',
                                                text: 'English'
                                            },
                                            {
                                                xtype: 'menucheckitem',
                                                itemId: 'es',
                                                text: 'Español'
                                            },
                                            {
                                                xtype: 'menucheckitem',
                                                itemId: 'fr',
                                                text: 'Français'
                                            },
                                            {
                                                xtype: 'menucheckitem',
                                                itemId: 'nl',
                                                text: 'Nederlands'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'gridpanel',
                            title: 'My Grid Panel',
                            store: 'MyStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'string',
                                    text: 'String'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'number',
                                    text: 'Number'
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'date',
                                    text: 'Date'
                                },
                                {
                                    xtype: 'booleancolumn',
                                    dataIndex: 'bool',
                                    text: 'Boolean'
                                }
                            ],
                            viewConfig: {

                            },
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    displayInfo: true,
                                    store: 'MyStore',
                                    dock: 'bottom',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'boton1',
                                            text: 'MyButton',
                                            listeners: {
                                                click: {
                                                    fn: me.onBoton1Click,
                                                    scope: me
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Label'
                        },
                        {
                            xtype: 'filefield',
                            fieldLabel: 'Label'
                        },
                        {
                            xtype: 'radiofield',
                            fieldLabel: 'Label',
                            boxLabel: 'Box Label'
                        },
                        {
                            xtype: 'radiogroup',
                            width: 543,
                            fieldLabel: 'Label',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    boxLabel: 'Box Label'
                                },
                                {
                                    xtype: 'radiofield',
                                    boxLabel: 'Box Label'
                                }
                            ]
                        },
                        {
                            xtype: 'checkboxgroup',
                            width: 543,
                            fieldLabel: 'Label',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Box Label'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Box Label'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onBoton1Click: function(button, e, options) {
        Ext.Msg.alert(_("Warning"), _("W0500"));
    }

});