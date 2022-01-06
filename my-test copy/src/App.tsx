import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicketPopover from './tooltip';

function App() {
    const ticketIssueTypeIconURIStory = "https://xandertabulardoche.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
    const htmlOther = "<ul>\n\t<li><a href=\"https://github.com/mattermost/mattermost-plugin-zoom/issues/235\" class=\"external-link\" rel=\"nofollow noreferrer\">issue</a></li>\n</ul>\n"
    const htmlLorem = "<p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    const htmlIpsum = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    //let manyLabels = ["many 1 and long labels av asd asw asd asds aqw", "many 2 and","many 3 long long "];
    let manyLabels = []
    for (let i = 0; i < 100; i++) {
        manyLabels.push("many" + i);
    }
    console.log(manyLabels);
    //punch
    const followingID = "MM-37566";
    const followingTitle = "RN: Mobile V2: In-App Notification ";
    const followingDescription = "As a user I want to see a preview of message notifications that come in while viewing another screen or channel. Current solution: In-app notifications display as banner…";
    const followingAssignerName = "Leonard Riley"
    const followingFixVersion = "Mobile v2.0"
    const followingLabel = [
        "UX Needed",
        "Beta"
    ]
    const lowLabels = ["low 1", "low 2", "low 3", "low 4", "low 5"]
    const abab = null
    return (
        <div className="App">
            hello world
            <TicketPopover
                ticketIssueTypeIconURI={ticketIssueTypeIconURIStory}
                ticketId={followingID}
                ticketAssignee={followingAssignerName}
                ticketAssigneePicture="picture"
                ticketDescription={followingDescription}
                ticketLabel={followingLabel}
                //
                ticketStatus="Open"
                ticketStatusKey="new"
                //
                ticketFixVersion={followingFixVersion}
                ticketTitle={followingTitle}
                ticketTag="Open"
                ticketURI=""/>
        </div>
    );
}

export default App;
