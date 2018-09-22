import * as enzyme from 'enzyme';
import enzyme_preact = require('enzyme-adapter-preact');

const Adapter = (enzyme_preact  as any).Adapter;

enzyme.configure({ adapter: new Adapter() });