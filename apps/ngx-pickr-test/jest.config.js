module.exports = {
    name: 'ngx-pickr-test',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/ngx-pickr-test',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};
