import React from "react";
import { shallow } from "enzyme";
import Card from "../../../components/Card/Card";

describe('card component', () => {
    const mock = {
        subreddit: 'test subreddit',
        title: 'test title',
        image: 'test.jpg',
        video: 'test.mp4',
        num_comments: '5',
        author: 'test author',
        created_utc: Date.now()
    };

    it('renders subreddit, title, image, comments, author and the date', () => {
        const wrapper = shallow(<Card data={mock}/>)

        expect(wrapper.find('h4').text()).toEqual('test subreddit');
        expect(wrapper.find('h2').text()).toEqual('test title');
        expect(wrapper.find('img').prop('src')).toEqual('test.jpg');
        expect(wrapper.find('img').prop('alt')).toEqual('test title');
        expect(wrapper.find('source').prop('src')).toEqual('test.mp4');
    })

})