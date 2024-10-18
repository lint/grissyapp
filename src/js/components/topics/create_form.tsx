
import React from 'react';
import ContentHeader from '../general/content_header';
import TextField from '../forms/text_field';
import FormGroup from '../forms/form_group';
import SubmitCancelButtons from '../forms/submit_cancel';
import { setCookie } from '../../util/cookies';
import { Link } from 'react-router-dom';

import './topics.css';

export interface TopicCreateFormButtonProps {
    className: string;
    text: string;
}

export function TopicCreateFormButton({className, text}: TopicCreateFormButtonProps) {
    
    function handle_create() {
        if (location.pathname !== "/topics/create") {
            setCookie("create-topic-url-ref", location.pathname, 0);
        }
    }

    return (
        <Link className="unset" to="/topics/create">
            <button className={className} onClick={handle_create}>{text}</button>
        </Link>
    );
}

export default function TopicCreateForm() {
    
    return (
        <div>
            <ContentHeader text="Create Topic" />
            <div id="create-topic-form">
                <div>
                    <FormGroup title="Setup">
                        <>
                        <TextField title="Topic Name" input_id="create-form-input-title" is_number={false} is_required={true} placeholder="My New Topic" value="" size={30} min_len={1} max_len={256} />
                        <TextField title="Users" input_id="create-form-input-num-users" is_number={true} is_required={false} placeholder="2" value="" size={5} min_len={1} max_len={4} />
                        <TextField title="Subjects" input_id="create-form-input-num-subjects" is_number={true} is_required={false} placeholder="6" value="" size={5} min_len={1} max_len={4} />
                        <TextField title="Entries" input_id="create-form-input-num-entries" is_number={true} is_required={false} placeholder="4" value="" size={5} min_len={1} max_len={4} />
                        </>
                    </FormGroup>
                    <FormGroup title="Import">
                        <>
                        <input type="file"></input>
                        </>
                    </FormGroup>
                    <FormGroup title="Input">
                        <>
                        </>
                    </FormGroup>
                </div>
                <SubmitCancelButtons />
            </div>
        </div>
    );
}
