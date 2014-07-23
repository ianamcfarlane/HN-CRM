/* *****************************************************************************
TypeScript definition file for Dynamics CRM 2011 client scripts.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.

Author: Łukasz Kowalski-Glikman
E-mail: kowgli@gmail.com
WWW: http://xrmdevel.blogspot.com/2012/10/typescript-crm-2011-client-scripting.html

You are free to use and modify this code in any way. The only requirement is 
to keep the license and author information intact.
***************************************************************************** */

declare module Xrm {
    export module Page {
        export interface Option {
            text: string;
            value: number;
        }

        export interface Privilege {
            canRead: bool;
            canUpdate: bool;
            canCreate: bool;
        }

        export interface Attribute {
            addOnChange(functionReference: Function): void;
            fireOnChange(): void;
            getAttributeType(): string;
            getFormat(): string;
            getInitialValue(): number;
            getIsDirty(): bool;
            getMax(): number;
            getMaxLength(): number;
            getMin(): number;
            getName(): string;
            getOption(): Option;
            getOptions(): Option[];
            getParent(): data.entity;
            getPrecision(): number;
            getRequiredLevel(): string;
            getSelectedOption(): Option;
            getSubmitMode(): string;
            getText(): string;
            getUserPrivilege(): Privilege;
            getValue(): Object;
            removeOnChange(functionReference: Function): void;
            setRequiredLevel(requirementLevel: string);
            setSubmitMode(submitMode: string);
            setValue(value: Object);
        }

        export interface Control {
            addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: bool): void;
            addOption(option: Option, index?: number): void;
            clearOptions(): void;
            getAttribute(): Attribute;
            getControlType(): string;
            getData(): string;
            getDefaultView(): string;
            getDisabled(): bool;
            getLabel(): string;
            getName(): string;
            getParent(): Section;
            getSrc(): string;
            getInitialUrl(): string;
            getObject(): Object;
            getVisible(): bool;
            refresh(): void;
            removeOption(value: number): void;
            setData(data: string): void;
            setDefaultView(viewGuid: string): void;
            setDisabled(disabled: bool): void;
            setFocus(): void;
            setLabel(label: string): void;
            setSrc(src: string): void;
            setVisible(visible: bool): void;
        }

        export interface Tab {
            getDisplayState(): string;
            getLabel(): string;
            getName(): string;
            getParent(): ui;
            getVisible(): bool;
            setDisplayState(displayState: string): void;
            setFocus(): void;
            setLabel(label: string): void;
            setVisible(visible: bool): void;
        }

        export interface Section {
            getLabel(): string;
            getName(): string;
            getParent(): Tab;
            getVisible(): bool;
            setLabel(label: string): void;
            setVisible(visible: bool): void;
        }

        export interface EntityReference {
            id: string;
            name: string;
            entityType: string;
        }

        export interface Lookup {
            [index: number]: EntityReference;
        }

        export function getAttribute(): Attribute[];
        export function getAttribute(attributeName: string): Attribute;
        export function getAttribute(attributeNumber: number): Attribute;
        export function getAttribute(delegateFunction: (attribute: Attribute, index: number) => Function): Attribute[];
        export function getControl(): Control[];
        export function getControl(controlName: string): Control;
        export function getControl(controlNumber: number): Control;
        export function getControl(delegateFunction: (control: Control, index: number) => Function): Control[];

        export module context {
            export function getAuthenticationHeader(): string;

            /**
            * Introduced in UR12; replaces {@link getServerUrl}
            * @seealso getServerUrl
            */
            export function getClientUrl(): string;

            export function getCurrentTheme(): string;
            export function getOrgLcid(): number;
            export function getOrgUniqueName(): string;
            export function getQueryStringParameters(): string;

            /**
            * Deprecated by UR 12
            * @seealso getClientUrl
            */
            export function getServerUrl(): string;

            export function getUserId(): string;
            export function getUserLcid(): number;
            export function getUserRoles(): string[];
            export function isOutlookClient(): bool;
            export function isOutlookOnline(): bool;
            export function prependOrgName(sPath: string): string;
        }

        export module data {
            export module entity {
                export function addOnSave(functionReference: Function): void;
                export function getDataXml(): string;
                export function getEntityName(): string;
                export function getId(): string;
                export function getIsDirty(): bool;
                export function removeOnSave(functionReference: Function): void;
                export function save(saveMode?: string);

                export module attributes {
                    export function forEach(delegateFunction: (attribute: Attribute, index: number) => Function): void;
                    export function get(): Attribute[];
                    export function get(attributeName: string): Attribute;
                    export function get(attributeNumber: number): Attribute;
                    export function get(delegateFunction: (attribute: Attribute, index: number) => Function): Attribute[];
                    export function getLength(): number;
                }
            }
        }

        export module ui {
            export function close(): void;
            export function getCurrentControl(): Object;
            export function getFormType(): number;
            export function getViewPortHeight(): number;
            export function getViewPortWidth(): number;
            export function refreshRibbon(): void;

            export module controls {
                export function forEach(delegateFunction: (control: Control, index: number) => Function): void;
                export function get(): Control[];
                export function get(controlName: string): Control;
                export function get(controlNumber: number): Control;
                export function get(delegateFunction: (control: Control, index: number) => Function): Control[];
                export function getLength(): number;
            }

            export module navigation {
                export interface Item {
                    getId(): string;
                    getLabel(): string;
                    getVisible(): bool;
                    setFocus(): void;
                    setLabel(label: string): void;
                    setVisible(visible: bool): void;
                }

                export module items {
                    export function forEach(delegateFunction: (item: Item, index: number) => Function): void;
                    export function get(): Item[];
                    export function get(itemName: string): Item;
                    export function get(itemNumber: number): Item;
                    export function get(delegateFunction: (item: Item, index: number) => Function): Item[];
                    export function getLength(): number;
                }
            }

            export module formSelector {
                export interface Item {
                    getId(): string;
                    getLabel(): string;
                    navigate(): void;
                }

                export function getCurrentItem(): Item;

                export module items {
                    export function forEach(delegateFunction: (item: Item, index: number) => Function): void;
                    export function get(): Item[];
                    export function get(itemName: string): Item;
                    export function get(itemNumber: number): Item;
                    export function get(delegateFunction: (item: Item, index: number) => Function): Item[];
                    export function getLength(): number;
                }
            }

            export module tabs {
                export function forEach(delegateFunction: (tab: Tab, index: number) => Function): void;
                export function get(): Tab[];
                export function get(tabName: string): Tab;
                export function get(tabNumber: number): Tab;
                export function get(delegateFunction: (tab: Tab, index: number) => Function): Tab[];
                export function getLength(): number;

                export module sections {
                    export function forEach(delegateFunction: (section: Section, index: number) => Function): void;
                    export function get(): Section[];
                    export function get(sectionName: string): Section;
                    export function get(sectionNumber: number): Section;
                    export function get(delegateFunction: (section: Section, index: number) => Function): Section[];
                    export function getLength(): number;

                    export module controls {
                        export function forEach(delegateFunction: (control: Control, index: number) => Function): void;
                        export function get(): Control[];
                        export function get(controlName: string): Control;
                        export function get(controlNumber: number): Control;
                        export function get(delegateFunction: (control: Control, index: number) => Function): Control[];
                        export function getLength(): number;
                    }
                }
            }
        }
    }

    // Thanks to MattMatt
    export module Utility {
        export function openEntityForm(name: string, id?: string, parameters?: { [index: string]: any; }): Window;
        export function openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
    }

    // The following API components are undocumented, and therefore not supported by Microsoft and potentially volatile
    export module Application {
        export interface GridControl {
            GetParameter(parameterName: string): any;
        }
    }
}
