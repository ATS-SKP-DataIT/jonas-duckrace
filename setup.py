from setuptools import setup
print("setup tool import")

setup(
    name='devenv-cli',
    version='0.1.0',
    packages=['devenv'],
    entry_points={
        'console_scripts': [
            'devenv = devenv.__main__:main'
        ]
    })
