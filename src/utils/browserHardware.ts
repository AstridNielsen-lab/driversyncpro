import type { SystemInfo } from '../types';

async function getNavigatorInfo() {
  const ua = navigator.userAgent;
  const platform = navigator.platform;
  
  // Parse OS information from user agent
  const osInfo = {
    name: '',
    version: '',
    build: ''
  };

  if (ua.includes('Windows')) {
    osInfo.name = 'Windows';
    const matches = ua.match(/Windows NT (\d+\.\d+)/);
    if (matches) {
      const version = matches[1];
      switch (version) {
        case '10.0': osInfo.name = 'Windows 10/11'; break;
        case '6.3': osInfo.name = 'Windows 8.1'; break;
        case '6.2': osInfo.name = 'Windows 8'; break;
        case '6.1': osInfo.name = 'Windows 7'; break;
      }
    }
  } else if (ua.includes('Mac OS X')) {
    osInfo.name = 'macOS';
    const matches = ua.match(/Mac OS X (\d+[._]\d+[._]\d+)/);
    if (matches) {
      osInfo.version = matches[1].replace(/_/g, '.');
    }
  } else if (ua.includes('Linux')) {
    osInfo.name = 'Linux';
  }

  return osInfo;
}

async function getHardwareInfo() {
  let gpuInfo = '';
  let memoryInfo = '';
  
  // Get GPU information
  const gl = document.createElement('canvas').getContext('webgl');
  if (gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      gpuInfo = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
  }

  // Get memory information
  if (navigator.deviceMemory) {
    memoryInfo = `${navigator.deviceMemory} GB`;
  }

  return {
    gpu: gpuInfo,
    memory: memoryInfo,
    cores: navigator.hardwareConcurrency || 'Unknown'
  };
}

export async function detectRealHardware(): Promise<SystemInfo> {
  const [osInfo, hwInfo] = await Promise.all([
    getNavigatorInfo(),
    getHardwareInfo()
  ]);

  return {
    os: osInfo,
    motherboard: {
      manufacturer: 'Detection Limited',
      model: 'Browser API Limited',
      biosVersion: 'N/A',
      chipset: 'N/A'
    },
    cpu: {
      name: 'CPU Information Limited in Browser',
      cores: typeof hwInfo.cores === 'number' ? hwInfo.cores : 0,
      threads: typeof hwInfo.cores === 'number' ? hwInfo.cores : 0,
      speed: 'N/A'
    },
    memory: {
      total: hwInfo.memory || 'Detection Limited',
      type: 'Detection Limited',
      speed: 'N/A'
    },
    devices: [
      {
        id: '1',
        name: hwInfo.gpu || 'Generic Display Adapter',
        type: 'GPU',
        manufacturer: hwInfo.gpu?.split(' ')[0] || 'Unknown',
        details: {
          'API Support': 'WebGL',
          'Detection Method': 'Browser API'
        },
        currentDriver: {
          version: 'Detection Limited',
          date: new Date().toISOString().split('T')[0],
          status: 'unknown'
        }
      }
    ]
  };
}