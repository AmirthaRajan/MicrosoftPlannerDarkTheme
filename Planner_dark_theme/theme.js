$(document).ready(function() {

    $("head").append(`<style>
    .appContent,.appContent .sideNav .plannerLeftNav,.appContent .sideNav .plannerLeftNav .content,body > div > div > div.appContent > div div > div.content
    {
        background-color: #272727;
    }
    .leftNavStaticLinksGroup
    {
        background-color: #272727;
        margin: 0;
    }
    .theme-light .sideNav>.header {
        background-color: #272727;
        color: #ffffff;
    }
    .theme-light .sideNav>.header:focus, .theme-light .sideNav>.header:hover {
        background-color: #e8e8e8;
        color: black;
    }
    .theme-light .plannerLeftNav {
        border-color: black;
    }
    .theme-light .sideNav 
    {
        border-color: black;
    }
    .theme-light .plannerLeftNav {
        border-right: 0px;
    }
    .selected .leftNavItem
    {
        color: black;
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:hover .linkContents span.leftNavItem
    {
        color: black;
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:hover>a>.linkContents>.outerPaddingRemove>.icon {
        color:black;
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li>a>.linkContents>.outerPaddingRemove>.icon {
        color: #ffffff;
    }
    .theme-light .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div>.pivotLink>.icon>button {
        color: #ffffff;
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:focus, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:focus-within, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:hover, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:hover,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:hover, .theme-light .plannerLeftNav>.content>ul>.header:focus, .theme-light .plannerLeftNav>.content>ul>.header:focus-within, .theme-light .plannerLeftNav>.content>ul>.header:hover {
        background-color: #f3f2f1;
        color: black;
    }
    .theme-light .plannerLeftNav .content .leftNavStaticLinksGroup .header,.theme-light .plannerLeftNav .content .leftNavStaticLinksGroup .header,.theme-light .plannerLeftNav .content .leftNavStaticLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .list .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .list .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .list .header,.theme-light .plannerLeftNav .content ul .header,.theme-light .plannerLeftNav .content ul .header,.theme-light .plannerLeftNav .content ul .header
    {
        background-color: #272727;
        color: white;   
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:focus, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:focus-within, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:hover, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li:hover, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li:hover, .theme-light .plannerLeftNav>.content>ul>li:focus, .theme-light .plannerLeftNav>.content>ul>li:focus-within, .theme-light .plannerLeftNav>.content>ul>li:hover {
        background-color: #f3f2f1;
        color: black;
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li,.theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li,.theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li,.theme-light .plannerLeftNav>.content>ul>li,.theme-light .plannerLeftNav>.content>ul>li,.theme-light .plannerLeftNav>.content>ul>li
    {
        background-color: #272727;
        color: white;   
    }
    .theme-light .noAccessErrorPage ::-webkit-scrollbar-thumb, .theme-light .plannerApp ::-webkit-scrollbar-thumb, .theme-light .plannerAppCallout ::-webkit-scrollbar-thumb, .theme-light .plannerAppDialog ::-webkit-scrollbar-thumb, .theme-light .sharepointApp ::-webkit-scrollbar-thumb, .theme-light .teamsApp ::-webkit-scrollbar-thumb, .theme-light .webpartApp ::-webkit-scrollbar-thumb
    {
        background-color: #d6d4d1;
    }
    .taskBoardView.boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection>.columnTitle>h3 
    {
        color: white;
    }
    .theme-light .boardColumn 
    {
        background-color: #383838;
    }
    .theme-light .topHeader .dropdownMenu>.ms-Label {
        color:white;
    }
    .theme-light .topHeader .dropdownMenu:hover {
        background-color: #edebe9;
    }
    .theme-light .topHeader .dropdownMenu:hover .ms-Label,.theme-light .topHeader .dropdownMenu:hover .ms-Label>.value
    {
        color: black;
    }
    .theme-light .topHeader .dropdownMenu>.ms-Label>.value {
        color: #ffffff;
    }
    .leftNavItem
    {
        color: white;
    }
    h3.headerText 
    {
        color: white;
    }
    .header:hover h3.headerText,.header:focus h3.headerText
    {
        color: black;
    }
    .primaryTextSectionTitle
    {
        color: white;
    }
    #planner-main-content .nonIcon .primarySection .contextInfoSectionContainer .ms-TooltipHost
    {
        color: white;
    }
    #planner-main-content .nonIcon .secondarySection .pivotLink span
    {
        color: white;
    }
    .theme-light .boardColumn>div>.columnHeader>.addButtonContainer>.addButton {
        color: white;
    }
    .theme-light .boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection {
        color: #ffffff;
    }
    .theme-light .boardColumn>div>.columnHeader>.addButtonContainer>.addButton {
        background-color: #4c4c4c;
    }
    .theme-light .secondarySection>.sectionToggle {
        color: white;
    }
    .theme-light .secondarySection>.sectionToggle:hover
    {
        color:white;
    }
    .sideNav>.content>.leftNavStaticLinksGroup>li>a>.linkContents:hover,.sideNav>.content>div>.leftNavDynamicLinksGroup>.list>li>a>.linkContents:hover,.sideNav>.content>div>.leftNavDynamicLinksGroup>li>a>.linkContents:hover,.sideNav>.content>ul>li>a>.linkContents:hover
    {
        color:black;
    }
    .theme-light .sideNav>.footer {
        color: #ffffff;
        background-color: #272727;
    }
    .theme-light .sideNav>.footer .chevron ,.theme-light .sideNav>.footer:hover .leftNavItem
    {
        color: white;
    }
    .theme-light .sideNav>.footer:hover {
        color: black;
        background-color: white;
    }
    .theme-light .sideNav>.footer:hover .leftNavItem,.theme-light .sideNav>.footer:hover .chevron 
    {
        color: black;
    }
    .theme-light .taskCard>.container {
        background-color: #727272;
    }
    .theme-light .taskCard>.container>.contentAndLabels>.textContent>.taskMenuSection {
        color: #000000;
    }
    .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.titleRow>.title {
        color: #ffffff;
    }
    .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink.isSelected>.icon>.ms-Icon, .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink.isSelected>:not(.icon), .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink:hover>.icon>.ms-Icon, .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink:hover>:not(.icon) {
        border-bottom: 2px solid #ffffff;
        padding-bottom: 0;
    }
    .theme-light .topHeader>.nonIcon>div>.rightAlignedSection>.facePileArray .ms-Facepile-descriptiveOverflowButton .ms-Persona-initials>span
    {
        color:white;
    }
    html[dir=ltr] .topHeader .dropdownMenu>.dropDownIcon
    {
        color:white;
    }
    .theme-light .boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection>.columnTitle.addColumn
    {
        color:white;
    }
    .checkbox-container:hover .completeButtonIcon {
        color: #000000;
    }
    .theme-light .taskCard>.container>.contentAndLabels>.textContent>.thumbnail.placeholder {
        background-color: #ececec;
    }
    .documentPreviewIcon.genericIconColor {
        color: #ffffff;
    }
    .theme-light .noAccessErrorPage a, .theme-light .plannerApp>.appContent>.content a, .theme-light .plannerAppCallout a, .theme-light .plannerAppDialog a, .theme-light .sharepointApp a, .theme-light .teamsApp a, .theme-light .webpartApp a {
        color: #000000;
        text-shadow: none;
    }
    .checkbox-container>.toggleCheckLabel
    {
        color: white;
    }
    .theme-light .taskCard>.container>.membersAndLabels>.bottomBar>.assignmentControl>.label .ms-Icon--AddFriend {
        color: #000000;
    }
    .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.indicatorRow {
        color: #ffffff;
    }
    .theme-light .color-inprogress {
        color: #80ce82;
    }
    .documentPreviewIcon.excelIconColor {
        color: #239323;
        background-color: #ececec;
    }
    .theme-light .ms-Dialog-main.plannerAppDialog {
        background-color: #0000007a;
    }
    .theme-light .ms-Dialog-main.plannerAppDialog {
        background-color: #ffffff7a;
        border-radius: 2em;
    }
    .theme-light .ms-Dialog-main.plannerAppDialog .plannerAppDialogContents {
        background-color: #000000cf;
        border-radius: 1em;
    }
    .theme-light .ms-Callout.plannerAppCallout
    {
        background-color: transparent;
        padding: 0;
    }
    .theme-light .peoplePicker>.ms-Callout-main
    {
        background-color: #212121e6;
    }
    .theme-light .peoplePicker>.ms-Callout-main>div
    {
        color : white;
    }
    [dir=ltr] .peoplePicker>.ms-Callout-main>div>.assignmentPickerTextField.ms-TextField
    {
        padding: 1em;
    }
    .theme-light .peoplePicker>.ms-Callout-main>div>.userLists>.userListSection>.userList>.user:not(.readOnly):hover .ms-Persona-primaryText
    {
        color : black;
    }
    .theme-light .peoplePicker>.ms-Callout-main>div .ms-Persona-primaryText
    {
        color: white;
    }
    .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>.ms-TextField-fieldGroup>input, .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>.ms-TextField-fieldGroup>textarea, .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>div>input, .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>div>textarea {
        color: #ffffff;
    }
    .theme-light .taskEditor>.removeMargin>.lastModifiedSection {
        color: #fcfcfc;
    }
    .theme-light .taskEditor>.removeMargin>.dropdowns>.removeMargin .dropdownTuple .ms-Label, .theme-light .taskEditor>.removeMargin>.dropdowns>.removeMargin .dropdownTuple .ms-TextField .ms-Label {
        color: #ffffff;
    }
    .theme-light .taskEditor>.removeMargin>.description>.descriptionHeader>.descriptionTitle {
        color: #ffffff;
    }
    .theme-light .taskEditor>.removeMargin>.checklist>.checklistInfo {
        color: #ffffff;
    }
    .theme-light .taskEditor>.removeMargin>.attachments>label {
        color: #ffffff;
    }
    
    .theme-light .taskEditor>.removeMargin>.attachments>.addAttachmentButtonWrapper>.addAttachmentButton,.theme-light .commentThreadView>div>.sendCommentButton {
        color: black;
    }
    .theme-light .taskEditor>.removeMargin>.attachments>.addAttachmentButtonWrapper>.addAttachmentButton:hover,.theme-light .commentThreadView>div>.sendCommentButton:hover {
        color: white;
    }
    .theme-light .taskEditor>.removeMargin>.attachments>.addAttachmentButtonWrapper>.addAttachmentButton:hover,.theme-light .commentThreadView>div>.sendCommentButton:hover
    {
        background-color: #272727;
    }
    .theme-light .commentThreadView>label {
        color: #ffffff;
    }
    .theme-light .commentCard>.body>.header>.commenterName {
        color: #ffffff;
    }
    .theme-light .commentCard>.body>.content {
        color: #ffffff;
    }
    .theme-light .commentCard>.body>.header>.timestamp {
        color: #ffffff;
    }
    .theme-light .ms-Dialog-main.plannerAppDialog .plannerAppDialogContents {
        color: #ffffff;
    }
    .theme-light .taskEditor>.removeMargin>.assignedToUsers>.assignmentControl:not(.readOnly):hover>.label>i {
        background-color: #ffffff;
        color: black;
    }
    .theme-light .attachmentRow:hover:not(.uploading), .theme-teamslight .attachmentRow:hover:not(.uploading) {
        background-color: #ffffff00;
    }
    .theme-light .noAccessErrorPage .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .plannerApp>.appContent>.content .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .plannerAppCallout .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .plannerAppDialog .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .sharepointApp .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .teamsApp .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .webpartApp .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text {
        color: #ffffff;
    }
    .ms-Dialog-main .ms-Dialog-inner .checklist.rounded .ms-TextField.isTextStyle>.ms-TextField-wrapper>div>input {
        margin-left: 10px;
        background-color: #ffffffb3;
    }
    .theme-light .contentCard>.title {
        color: #ffffff;
    }
    .calendarView .fc-view-container .fc-body .fc-day-grid .fc-day-number
    {
        color: white;
    }
    .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.preview>.checklistPreview.rounded .checklistItem .ms-Checkbox .ms-Checkbox-label>span
    {
        color: #dadada;
    }
    .theme-light .taskCard.complete>.container>.contentAndLabels>.textContent>.topBar>.titleRow>.title {
        color: #c3c3c3;
    }
    .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.planName {
        color: #ffffff;
    }
    .checkbox-container>.toggleCheckLabel.checked {
        color: #4f6bed;
        background-image: radial-gradient(white,#4f6bed);
        border-radius: 50%;
    }
    .theme-light .taskEditor>.removeMargin>.planTitle
    {
        color: white;
    }
    .theme-light .taskEditor>.removeMargin>.title.completed>.edit input {
        color: #a7a7a7;
    }
    .theme-light .taskEditorDialog_dialog.ms-Dialog>.content>.ms-Dialog-main>.ms-Dialog-header>.ms-Dialog-topButton>.ms-Button {
        color: #000000;
    }
    .theme-light .planHubPage>.full>.welcome {
        color: #ffffff;
    }
    .appContent .sideNav .plannerLeftNav .mobileAppBanner .content, body > div > div > div.appContent > div div > div.mobileAppBanner .content
    {
        background-color: white;
    }
    .theme-light .planHubPage>.full>.header, .theme-light .planHubPage>.full>.pivotsContainer>.header {
        color: #ffffff;
    }
    .theme-light .planHubPage>.full>.header>.subHeader.selected, .theme-light .planHubPage>.full>.pivotsContainer>.header>.subHeader.selected {
        color: #21c36a;
    }
    .theme-light .planHubPage>.full>.header>.subHeader, .theme-light .planHubPage>.full>.pivotsContainer>.header>.subHeader {
        color: #ffffff;
    }
    .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.bottomHalf>.textWrapper .fallbackContextInfoText, .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.bottomHalf>.textWrapper .planContext .ms-Breadcrumb-item {
        color: #bfbfbf;
    }
    .theme-light .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.textWrapper>.tileName {
        color: #ffffff;
    }
    .theme-light .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.contextMenuSection {
        color: #ffffff;
    }
    .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.starWrapperSection>button {
        color: black;
    }
    .theme-light .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.starWrapperSection {
        color: #ffffff;
    }
    .planCard>.removeMargin>.planCardInternal
    {
        box-shadow: 5px 3px 20px 0px rgba(255, 255, 255, 0.18), 3px 6px 6px 0 rgba(255, 255, 255, 0.11);
    }
    .planHubPage>.full>.mobileAppBanner
    {
        box-shadow: 6px 3px 20px 0 rgba(255, 255, 255, 0.18), 18px 20px 20px 0 rgba(255, 255, 255, 0.11);
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header>.groupButton, .theme-light .plannerLeftNav>.content>ul>.header>.groupButton {
        color: #ffffff;
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:hover>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:hover>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:hover>.groupButton, .theme-light .plannerLeftNav>.content>ul>.header:hover>.groupButton {
        color:black;
    }
    .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:focus>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:focus>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:focus>.groupButton, .theme-light .plannerLeftNav>.content>ul>.header:focus>.groupButton
    {
        color:black;
    }
    .documentPreviewIcon.genericIconColor {
        color: #000000;
    }
    .theme-light .checklistWrapper>ul>li>div>.checklistItemTitle {
        color: #b6b6b6;
    }  </style>`);
});