
import React from 'react';
import { Row } from 'react-bootstrap';

import { WideLeftColumn, RightColumn, SingleColumn } from './Columns';

const Codepen = ({ id, title }) => (
    <div>
        <p data-height="307" data-theme-id="0" data-slug-hash={id} data-default-tab="js,result" data-user="swizec" data-embed-version="2" data-editable="true" className="codepen">See the Pen <a href={`https://codepen.io/swizec/pen/${id}`}>{title}</a> by Swizec Teller (<a href="http://codepen.io/swizec">@swizec</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    </div>
);

export const Declarations = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>Intro text for declarations comes here.</p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="qNYoxO" title="Variable Declarations - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="XKqExA" title="Variable Declarations - ES6" />
            <p>Explanation about constants</p>
            <Codepen id="NArYoL" title="Variable Declarations - ES6, const" />
            <p>Careful, arrays and objects are pass by variable</p>
            <Codepen id="WxJzWY" title="Variable Declarations - ES6, const2" />
        </RightColumn>
    </Row>
);

export const Destructuring = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>Intor text for destructuring</p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="JKvmRB" title="Variable Destructuring - ES5" />
            <Codepen id="akGgNx" title="Object Destructuring - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="GqdYNV" title="Array Destructuring - ES6" />
            <Codepen id="VjxEPg" title="Object Destructuring - ES6" />
            <Codepen id="ZOoqZa" title="Spread Operator - ES6" />
        </RightColumn>
    </Row>
);

export const ArrowFunctions = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>Intro text for arrow functions</p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="AXaGXY" title="Function Definitions - ES5" />
            <Codepen id="OXkZbm" title="This binding - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="yJjdrx" title="Fat arrow functions - ES6" />
            <Codepen id="RRyzpG" title="Lexical this - ES6" />
        </RightColumn>
    </Row>
);
