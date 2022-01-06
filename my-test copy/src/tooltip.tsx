import React, {PureComponent, Fragment} from "react";
import {getPopoverStyles} from './style';
import JiraAvatar from './assets/jira_avatar.png';

type Props = {
    ticketId?: string,
    ticketTitle: string,
    ticketDescription: string,
    ticketStatus: string,
    ticketStatusKey: string,
    ticketLabel: Array<string>,
    ticketAssignee: string,
    ticketAssigneePicture: string,
    ticketTag: string,
    ticketFixVersion?: string | null,
    ticketURI: string,
    ticketIssueTypeIconURI: string,
};

export default class TicketPopover extends PureComponent<Props> {
    truncateString(str: string, num: number) {
        if (num > str.length) {
            return str;
        } else {
            str = str.substring(0, num);
            return str + "...";
        }
    }

    //
    fixVersionLabel(fixVersion: string | undefined | null) {
        if (fixVersion) {
            return <div className="fix-version-label" style={{
                display: 'flex',
                color: '#333',
                marginTop: '16px',
                textAlign: 'left' as 'left',
                fontFamily: 'open sans',
                fontSize: '10px',
                fontWeight: '600',
                padding: '0px 0px 2px 0px',
            }}>Fix Version: <span className="fix-version-label-value" style={{
                backgroundColor: 'rgba(63, 67, 80, 0.08)',
                padding: '1px 8px',
                borderRadius: '2px',
            }}>{fixVersion}
            </span></div>;
        }
    }

    tagTicketStatus(ticketStatus: string, ticketStatusKey: string) {
        const defaultStyle = {
            fontFamily: 'open sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '12px',
            padding: '4px 8px 0px 8px',
            align: 'center' as 'center',
            height: 20,
            marginBottom: '8px',
        }
        console.log(ticketStatusKey)
        if (ticketStatusKey === "indeterminate") {
            console.log(ticketStatusKey)
            return <span style={{
                ...defaultStyle,
                color: '#FFFFFF',
                backgroundColor: '#1C58D9',
                borderRadius: '2px',
            }}>{ticketStatus}</span>
        }

        if (ticketStatusKey === "done") {
            return <span style={{
                ...defaultStyle,
                color: '#FFFFFF',
                backgroundColor: '#3DB887',

            }}>{ticketStatus}</span>
        }

        // ticketStatus == "new" or other
        return <span style={{
            ...defaultStyle,
            color: '#3F4350',
            backgroundColor: 'rgba(63, 67, 80, 0.16)',
        }}>{ticketStatus}</span>
    }

    labelList(labels: Array<string> | null | undefined, style: object) {
        if (labels !== undefined && labels !== null) {
            const styles = getPopoverStyles("");
            let totalString = 0
            let totalHide = 0;
            return (
                <Fragment>
                    <div className={'ticket-popover-label'} style={styles.bodyFrameLabel}>
                        {labels.map(function (label: string) {
                            if (totalString >= 45 || totalString + label.length >= 45) {
                                totalHide++;
                                return null;
                            }
                            totalString += label.length + 3;
                            return <span className="label-list" style={styles.bodyFrameLabels}>{label}</span>;
                        })}
                    </div>
                    {
                        totalHide != 0 ? (<div style={styles.bodyFrameLabelsTotalHide}>+{totalHide}more</div>) : null
                    }

                </Fragment>
            )
        }
    }


    render() {
        const style = getPopoverStyles("done");
        const {
            ticketIssueTypeIconURI,
            ticketId,
            ticketTitle,
            ticketTag,
            ticketDescription,
            ticketFixVersion,
            ticketStatus,
            ticketStatusKey,
            ticketURI,
            ticketLabel,
            ticketAssignee,
            ticketAssigneePicture,
        } = this.props;

        return (
            <div >
                <div className={'ticket-popover'}>
                    <div className={'ticket-popover-header'} style={style.header}>
                        <img src={JiraAvatar} style={style.appAvatar}/>
                        <a href={ticketURI} className={'ticket-popover-header-title'}>
                            <span style={style.ticketName}>{ticketId}</span>
                            <img width="12" height="12" src={ticketIssueTypeIconURI}/>
                        </a>
                    </div>
                    <div className={'ticket-popover-body'} style={style.body}>
                        <div className={'ticket-popover-body-frame'} style={style.bodyFrame}>
                            <a href={ticketURI}>{this.truncateString(ticketTitle, 80)}</a>
                            {this.tagTicketStatus(ticketStatus, ticketStatusKey)}
                        </div>
                        <div className={'ticket-popover-body-frame-description'}
                             dangerouslySetInnerHTML={{__html: ticketDescription}} style={style.bodyFrameDescription}/>
                        <div className={'ticket-popover-label'}>
                            {this.fixVersionLabel(ticketFixVersion)}
                            {this.labelList(ticketLabel, style)}
                        </div>
                    </div>
                    <div className={'ticket-popover-footer'} style={style.footer}>
                        <img className={'ticket-popover-footer-assigner-profile'}
                             src={"https://secure.gravatar.com/avatar/b661863ab79843efa9f401e34059628b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FXD-3.png"}>
                        </img>
                        <span className={'ticket-popover-footer-assigner-name'}>
                            {ticketAssignee}
                        </span>
                        <span className={'ticket-popover-footer-assigner-is-assigned'}>is assigned</span>

                    </div>
                    <div className={'ticket-popover-footer-arrow'}>
                        <div className={'ticket-popover-footer-arrow-vector'}>
                        </div>
                        <div className={'ticket-popover-footer-arrow-bottom'}>
                            <span >
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

