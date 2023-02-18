module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/styles/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,
    '^@home/(.*)$': '<rootDir>/src/home/$1',
    '^@auth/(.*)$': '<rootDir>/src/auth/$1',
    '^@mypage/(.*)$': '<rootDir>/src/mypage/$1',
    '^@places/(.*)$': '<rootDir>/src/places/$1',
    '^@enroll/(.*)$': '<rootDir>/src/places/enroll/$1',
    '^@search/(.*)$': '<rootDir>/src/places/search/$1',
    '^@place/(.*)$': '<rootDir>/src/places/place/$1',
    '^@guide/(.*)$': '<rootDir>/src/plan/guide/$1',
    '^@list/(.*)$': '<rootDir>/src/plan/list/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^styles/(.*)$': '<rootDir>/styles/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
}
