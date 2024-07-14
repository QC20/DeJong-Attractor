const vertexShaderSource = `
    attribute vec2 a_position;
    uniform float u_time;
    
    void main() {
        float a = -2.0 + sin(u_time / 8000.0);
        float b = -2.0;
        float c = -1.2;
        float d = 2.0;
        
        vec2 p = a_position;
        for (int i = 0; i < 100; i++) {
            float x = sin(a * p.y) - cos(b * p.x);
            float y = sin(c * p.x) - cos(d * p.y);
            p = vec2(x, y);
        }
        gl_Position = vec4(p * 0.5, 0.0, 1.0);
        gl_PointSize = 1.0;
    }
`;

const fragmentShaderSource = `
    precision mediump float;
    
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 0.1);
    }
`;