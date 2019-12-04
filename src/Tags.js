import React from 'react';
import { Badge } from 'reactstrap';

class TagsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <React.Fragment>
                <select onChange={this.props.mytags} className="browser-default custom-select justify-content-center">
                    <option defaultValue>Choose a tag to be searched by</option>

                    {this.props.tagarray ? this.props.tagarray.map(
                        (tag, index) => {
                            return (

                                <option value={tag.id} key={index} name={tag.name}>{tag.name}</option>

                            )
                        }
                    ) : ''}

                </select>



                {this.props.selectedtags ? this.props.selectedtags.map(
                    (item, index) => {

                        var tag = this.props.tagarray.filter(obj => {

                            return obj.id === Number(item.tag_id);
                        });

                        return (

                            tag.length > 0 ? <Badge value={tag[0].id} key={index} name={tag[0].name} color="primary" pill>{tag[0].name}</Badge> : ''

                        )
                    }
                ) : ''}

            </React.Fragment>
        )
    }
}

export default TagsComponent;