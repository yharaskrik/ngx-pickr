module.exports = {
    name: 'ngx-pickr',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/ngx-pickr',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};
